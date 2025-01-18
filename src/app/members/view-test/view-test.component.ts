import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Fonction, Member, MemberSEX, MemberType } from 'src/app/models/models';
import { MembersComponent } from '../members.component';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTestComponent {

  Fonction = Fonction;
  MemberType = MemberType;
  MemberSEX = MemberSEX

  readonly dialogRef = inject(MatDialogRef<MembersComponent>);
  member = inject<Member>(MAT_DIALOG_DATA);
}


