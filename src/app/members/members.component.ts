import { formatDate } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';

//third-party
import { Observable } from 'rxjs';

//App
import { 
  Member, Fonction, FonctionMapping, 
  MemberType, TypeMapping, MemberSEX
} from '../models/models';

import { MembersService } from '../services/members.service';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewTestComponent } from './view-test/view-test.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  membersList$: Observable<Member[]> | undefined; 
  editMember!: Member;
  deleteMember!: Member;
  readMember!: Member;

  sexM: MemberSEX = MemberSEX.M;
  sexF: MemberSEX = MemberSEX.F;
  SexType = MemberSEX;
  
  FonctionMapping = FonctionMapping;
  TypeMapping = TypeMapping;
  fonctionTypes = Object.values(Fonction);
  typeTypes = Object.values(MemberType);

  locale = 'en-US';
  welcomeText = "Welcome Yahia";

  readonly dialog = inject(MatDialog);

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.membersList$ = this.memberService.getMembers();
    // this.getMembers();
  }

  public getMembers(): void {
    this.memberService.getMembers().subscribe(
      data => {
        this.membersList$ = data;
      }
    )
  }

  public onAddMember(addForm: NgForm): void {
    const form = document.getElementById('add-member-form');
    form?.click();
    //console.log(addForm.value);
    const member  = addForm.value as Member;
    if(member.fonction === '-1') {
      member.fonction = '';
    }
    member.joinDate = formatDate(member.joinDate, 'dd/MM/yyyy', this.locale);
    this.memberService.add(member).then(response => {
      // this.updateSuceessToast();
      alert("Ajout réalisé avec succés!")
    }).catch( error => {
      alert("Erreur lors de l'ajout\n"+error);
    });
    window.location.reload();
  }

  public onUpdateMember(member: Member): void {
    member.joinDate = formatDate(member.joinDate, 'dd/MM/yyyy', this.locale);
    // console.log(member.joinDate);
    
    this.memberService.update(member);
    window.location.reload();
  }

  public onDeleteMember(memberId: number): void {
    this.memberService.delete(memberId);
    window.location.reload();
  }

  openEditDialog(member: Member): void {
    const dialogRef = this.dialog.open(EditMemberComponent, {
      data: member,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        member = result;
      }
    });
  }

  openViewDialog(member: Member): void {
    const dialogRef = this.dialog.open(ViewMemberComponent, {
      data: member,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        member = result;
      }
    });
  }

  openViewTestDialog(member: Member): void {
    const dialogRef = this.dialog.open(ViewTestComponent, {
      data: member,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        member = result;
      }
    });
  }
}
