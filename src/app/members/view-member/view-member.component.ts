import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MembersComponent } from '../members.component';
import { Fonction, FonctionMapping, Member, MemberSEX, MemberType, TypeMapping } from 'src/app/models/models';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent {

  readonly dialogRef = inject(MatDialogRef<MembersComponent>);
  member = inject<Member>(MAT_DIALOG_DATA);

  sexM: MemberSEX = MemberSEX.M;
  sexF: MemberSEX = MemberSEX.F;
  SexType = MemberSEX;
  
  FonctionMapping = FonctionMapping;
  TypeMapping = TypeMapping;
  fonctionTypes = Object.values(Fonction);
  typeTypes = Object.values(MemberType);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
