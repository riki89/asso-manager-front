import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cotisation, MeanOfPayment, MeanOfPaymentMapping } from 'src/app/models/cotisations';
import { Member } from 'src/app/models/models';
import { CotisationsService } from 'src/app/services/cotisations.service';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent implements OnInit {
  cotisationsList!: Cotisation[];
  editCotisation!: Cotisation;
  deleteCotisation!: Cotisation;
  readCotisation!: Cotisation;
  membersList!:Member[];

  MeanOfPaymentMapping = MeanOfPaymentMapping;
  // TypeMapping = TypeMapping;
  paymentTypes = Object.values(MeanOfPayment);
  // typeTypes = Object.values(Type);
  locale = 'en-US';

  constructor(private cotisationService: CotisationsService, private memberService: MembersService) {}

  ngOnInit(): void {
    this.getList();
    this.getMembersList();
  }

  public getList(): void {
    this.cotisationService.get().subscribe(response => {
        this.cotisationsList = response;
        console.log("list cotisation: ", response);
        
    });
  }

  public getMembersList(): void {
    this.memberService.getMembers().subscribe(response => {
        this.membersList = response;
        console.log("list members: ",response);
        
    });
  }

  public getMember(memberId:number) {
    return this.cotisationService.getMember(memberId);
  }

  public onAddCotisation(addForm: NgForm): void {
    const form = document.getElementById('add-cotisation-form');
    form?.click();
    console.log(addForm.value);
    const cotisation  = addForm.value as Cotisation;
    cotisation.month = formatDate(cotisation.month, 'dd/MM/yyyy', this.locale);
    cotisation.date = formatDate(cotisation.date, 'dd/MM/yyyy', this.locale);
    this.cotisationService.add(cotisation).then(response => {
      // this.updateSuceessToast();
      alert("Cotisation ajoutee avec succès!");
    }).catch( error => {
      alert("Erreur lors de l'ajout \n");
    }).finally( () => {
      window.location.reload();
    });
    // window.location.reload();
  }

  public onUpdateCotisation(cotisation: Cotisation): void {
    cotisation.month = formatDate(cotisation.month, 'dd/MM/yyyy', this.locale);
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
