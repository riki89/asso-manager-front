import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member, SEXE } from '../models/models';
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
  SEX: SEXE = SEXE.M;
  imgF:string = '/assets/img/avatar3.png';
  imgM:string = '/assets/img/avatar2.png';
  welcomeText = "Welcome Yahia";

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.getMembers();
    console.log(this.SEX[0]);
    
    this.editMember = this.membersList[0];
    this.deleteMember = this.membersList[1];
    this.readMember = this.membersList[0];
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
    //window.location.reload();
  }

  public onUpdateMember(Member: Member): void {
    this.memberService.update(Member);
    //window.location.reload();
  }

  public onDeleteMember(memberId: number): void {
    this.memberService.delete(memberId);
    //window.location.reload();
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

  public onOpenModal(Member: Member, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addMemberModal');
    }
    if (mode === 'edit') {
      this.editMember = Member;
      button.setAttribute('data-bs-target', '#updateMemberModal');
      console.log(button.getAttribute('data-bs-target'));
      
    }
    if (mode === 'delete') {
      this.deleteMember = Member;
      button.setAttribute('data-bs-target', '#deleteMemberModal');
    }
    if (mode === 'read') {
      this.readMember = Member;
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
