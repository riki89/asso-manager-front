import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  list!: Activity[];

  constructor(private activityService:ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
    //console.log("Test: ",this.activityList);
  }

  getActivities():void {
    //this.activityService.getActivity(1).then({});
    this.activityService.get().subscribe( response => {
      this.list = response;
    });
  }

  public onOpenModal(activity: Activity, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMemberModal');
    }
    if (mode === 'edit') {
     // this.edit = Member;
      button.setAttribute('data-target', '#updateMemberModal');
      console.log(button.getAttribute('data-target'));
      
    }
    if (mode === 'delete') {
      //this.deleteMember = Member;
      button.setAttribute('data-target', '#deleteMemberModal');
    }
    if (mode === 'read') {
      //this.readMember = Member;
      //console.log(this.readMember);
      
      button.setAttribute('data-target', '#readMemberModal');
    }
    container?.appendChild(button);
    button.click();
  }

}

export class Activity {
  id!:number;
  type!:string;
  date:Date = new Date();
  lieu!:string;
} 
