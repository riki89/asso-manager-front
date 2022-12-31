import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { 
  Member, SEXE, 
  Fonction, FonctionMapping, 
  Type, TypeMapping 
} from '../models/models';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  membersList: Member[] = [];
  editMember!: Member;
  deleteMember!: Member;
  readMember!: Member;
  sexM: SEXE = SEXE.M;
  sexF: SEXE = SEXE.F;
  SexType = SEXE;
  Fonction = Fonction;
  Type = Type;
  typeSimple = Type.simple;
  typeBureau = Type.bureau;

  FonctionMapping = FonctionMapping;
  TypeMapping = TypeMapping;
  fonctionTypes = Object.values(Fonction);
  typeTypes = Object.values(Type);

  imgF:string = '/assets/img/avatar3.png';
  imgM:string = '/assets/img/avatar2.png';
  welcomeText = "Welcome Yahia";

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  public getMembers(): void {
    this.memberService.getMembers().subscribe(
      data => {
        this.membersList = data;
      }
    )
  }

  public onAddMember(addForm: NgForm): void {
    const form = document.getElementById('add-member-form');
    form?.click();
    //console.log(addForm.value);
    this.memberService.add(addForm.value);
    window.location.reload();
  }

  public onUpdateMember(member: Member): void {
    this.memberService.update(member);
    window.location.reload();
  }

  public onDeleteMember(memberId: number): void {
    this.memberService.delete(memberId);
    window.location.reload();
  }

  public searchMembers(key: string): void {
    console.log(key);
    const results: Member[] = [];
    for (const member of this.membersList) {
      if (member.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || member.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || member.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || member.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || member.function.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || member.sex.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(member);
      }
    }
    this.membersList = results;
    if (results.length === 0 || !key) {
      this.getMembers();
    }
  }

  public onOpenModal(member: Member, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addMemberModal');
    }
    if (mode === 'edit') {
      this.editMember = member;
      
      button.setAttribute('data-bs-target', '#updateMemberModal');
    }
    if (mode === 'delete') {
      this.deleteMember = member;
      button.setAttribute('data-bs-target', '#deleteMemberModal');
    }
    if (mode === 'read') {
      this.readMember = member;
      button.setAttribute('data-bs-target', '#readMemberModal');
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
