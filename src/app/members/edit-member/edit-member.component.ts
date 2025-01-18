import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Fonction, FonctionMapping, Member, MemberSEX, MemberType, TypeMapping } from 'src/app/models/models';
import { MembersComponent } from '../members.component';
import { MembersService } from 'src/app/services/members.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent {

  readonly dialogRef = inject(MatDialogRef<MembersComponent>);
  member = inject<Member>(MAT_DIALOG_DATA);

  sexM: MemberSEX = MemberSEX.M;
  sexF: MemberSEX = MemberSEX.F;
  SexType = MemberSEX;
  
  FonctionMapping = FonctionMapping;
  TypeMapping = TypeMapping;
  fonctionTypes = Object.values(Fonction);
  typeTypes = Object.values(MemberType);
  locale = 'en-US';

  constructor(private memberService: MembersService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onUpdateMember(member: Member): void {
      // member.joinDate = formatDate(member.joinDate, 'dd/MM/yyyy', this.locale);
      // console.log(member.joinDate);

      console.log(member.joinDate);
      
      
      this.memberService.update(member);
      window.location.reload();
    }
}
