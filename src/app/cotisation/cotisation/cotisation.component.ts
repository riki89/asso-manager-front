import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cotisation } from 'src/app/models/cotisations';
import { Member } from 'src/app/models/models';
import { CotisationsService } from 'src/app/services/cotisations.service';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent implements OnInit {
  cotisationsList: Cotisation[] = [];
  editCotisation!: Cotisation;
  deleteCotisation!: Cotisation;
  readCotisation!: Cotisation;
  membersList!:Member[];

  // FonctionMapping = FonctionMapping;
  // TypeMapping = TypeMapping;
  // fonctionTypes = Object.values(Fonction);
  // typeTypes = Object.values(Type);

  locale = 'en-US';
  welcomeText = "Welcome Yahia";

  constructor(private cotisationService: CotisationsService) {}

  ngOnInit(): void {
    this.getList();
  }

  public getList(): void {
    this.cotisationService.get().then(response => {
        this.cotisationsList = response;
    });
  }

  public onAddCotisation(addForm: NgForm): void {
    const form = document.getElementById('add-cotisation-form');
    form?.click();
    //console.log(addForm.value);
    const cotisation  = addForm.value as Cotisation;
    cotisation.date = formatDate(cotisation.date, 'MM/dd/yyyy', this.locale);
    this.cotisationService.add(cotisation).then(response => {
      // this.updateSuceessToast();
    });
    window.location.reload();
  }

  public onUpdateCotisation(cotisation: Cotisation): void {
    cotisation.date = formatDate(cotisation.date, 'dd/MM/yyyy', this.locale);
    // console.log(cotisation.date);
    
    this.cotisationService.update(cotisation);
    window.location.reload();
  }

  public onDeleteCotisation(cotisationId: number): void {
    this.cotisationService.delete(cotisationId);
    window.location.reload();
  }

  public searchCotisations(key: string): void {
    console.log(key);
    const results: Cotisation[] = [];
    for (const cotisation of this.cotisationsList) {
      if (cotisation.meanOfPayment.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || cotisation.description.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(cotisation);
      }
    }
    this.cotisationsList = results;
    if (results.length === 0 || !key) {
      this.getList();
    }
  }

  public onOpenModal(cotisation: Cotisation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addCotisationModal');
    }
    if (mode === 'edit') {
      this.editCotisation = cotisation;
      
      button.setAttribute('data-bs-target', '#updateCotisationModal');
    }
    if (mode === 'delete') {
      this.deleteCotisation = cotisation;
      button.setAttribute('data-bs-target', '#deleteCotisationModal');
    }
    if (mode === 'read') {
      this.readCotisation = cotisation;
      button.setAttribute('data-bs-target', '#readCotisationModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
