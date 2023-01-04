import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompteRendu, SEXE } from '../models/models';
import { CompteRenduService } from '../services/compteRendu.service';

@Component({
  selector: 'app-compteRendu',
  templateUrl: './compteRendu.component.html',
  styleUrls: ['./compteRendu.component.css']
})
export class CompteRenduComponent implements OnInit {
  compteRenduList: CompteRendu[] = [];
  editCompteRendu!: CompteRendu;
  deleteCompteRendu!: CompteRendu;
  readCompteRendu!: CompteRendu;
  SEX: SEXE = SEXE.M;
  imgF:string = '/assets/img/avatar3.png';
  imgM:string = '/assets/img/avatar2.png';
  welcomeText = "Welcome boussouriou";

  constructor(private compteRenduService: CompteRenduService) { }

  ngOnInit(): void {
    this.getCompteRendus();
    console.log(this.SEX[0]);
    
    this.editCompteRendu = this.compteRenduList[0];
    this.deleteCompteRendu = this.compteRenduList[1];
    this.readCompteRendu = this.compteRenduList[0];
  }



  public getCompteRendus(): void {
    this.compteRenduService.get().subscribe(
      data => {
        this.compteRenduList = data;
      }
    )
  }

  public onAddCompteRendu(addForm: NgForm): void {
    const form = document.getElementById('add-compteRendu-form');
    form?.click();
    //console.log(addForm.value);
    this.compteRenduService.add(addForm.value);
    //window.location.reload();
  }

  public onUpdateCompteRendu(CompteRendu: CompteRendu): void {
    this.compteRenduService.update(CompteRendu);
    //window.location.reload();
  }

  public onDeleteCompteRendu(crId: number): void {
    this.compteRenduService.delete(crId);
    //window.location.reload();
  }

  // public searchCompteRendus(key: string): void {
  //   console.log(key);
  //   const results: CompteRendu[] = [];
  //   for (const compteRendu of this.compteRenduList) {
  //     if (compteRendu.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || compteRendu.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || compteRendu.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || compteRendu.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || compteRendu.function.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || compteRendu.sex.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(compteRendu);
  //     }
  //   }
  //   this.compteRenduList = results;
  //   if (results.length === 0 || !key) {
  //     this.getCompteRendus();
  //   }
  // }

  public onOpenModal(CompteRendu: CompteRendu, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCompteRenduModal');
    }
    if (mode === 'edit') {
      this.editCompteRendu = CompteRendu;
      button.setAttribute('data-target', '#updateCompteRenduModal');
      console.log(button.getAttribute('data-target'));
      
    }
    if (mode === 'delete') {
      this.deleteCompteRendu = CompteRendu;
      button.setAttribute('data-target', '#deleteCompteRenduModal');
    }
    if (mode === 'read') {
      this.readCompteRendu = CompteRendu;
      console.log(this.readCompteRendu);
      
      button.setAttribute('data-target', '#readCompteRenduModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getSex(sexe:SEXE):string {
    switch(sexe){
      case SEXE.M: return 'Masculin';
      break;
      case SEXE.F: return 'Feminin';
      break; 
    };
  }
}
