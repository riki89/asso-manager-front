import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from '../models/models';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public membersList!: Member[];
  editMember!: Member;
  deleteMember!: Member;
  readMember!: Member;
  welcomeText = "Welcome Yahia";

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.getMembers();
    console.log(this.membersList);
  }

  public getMembers(): void {
    this.membersList = [
      {
          "id": 1,
          "lastName": "Diallo",
          "firstName": "Khady",
          "phoneNumber": "8329169960",
          "sex": "F",
          "type": "simple",
          "function": "GENDARME",
          "joinDate": "01/01/2019",
          "memberCard": false
      },
      {
          "id": 2,
          "lastName": "Diallo",
          "firstName": "Yahia",
          "phoneNumber": "8329169960",
          "sex": "M",
          "type": "simple",
          "function": "finance",
          "joinDate": "01/01/2019",
          "memberCard": false
      }
  ];
    this.memberService.get()
      .then(foundMembers => {
        
        //if (foundMembers) this.membersList = foundMembers;
        //else console.log("No members found!");
        
      });
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
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMemberModal');
    }
    if (mode === 'edit') {
      this.editMember = Member;
      button.setAttribute('data-target', '#updateMemberModal');
      console.log(button.getAttribute('data-target'));
      
    }
    if (mode === 'delete') {
      this.deleteMember = Member;
      button.setAttribute('data-target', '#deleteMemberModal');
    }
    if (mode === 'read') {
      this.readMember = Member;
      console.log(this.readMember);
      
      button.setAttribute('data-target', '#readMemberModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
