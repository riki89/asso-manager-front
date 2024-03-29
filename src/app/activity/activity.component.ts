import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Activity, TypeActivity, TypeActivityMapping } from '../models/models';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activitysList: Activity[] = [];
  editActivity!: Activity;
  deleteActivity!: Activity;
  readActivity!: Activity;
  TypeActivity!: TypeActivity;
  reunion: TypeActivity = TypeActivity.reunion;
  sortie: TypeActivity = TypeActivity.sortie;

  TypeActivityMapping = TypeActivityMapping;
  activityTypes = Object.values(TypeActivity);
  locale = 'en-US';

  constructor(private activityService:ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
    //console.log("Test: ",this.activityList);
  }

  getActivities():void {
    //this.activityService.getActivity(1).then({});
    this.activityService.get().subscribe( response => {
      this.activitysList = response;
    });
  }



  public onAddActivity(addForm: NgForm): void {
    const form = document.getElementById('add-activity-form');
    form?.click();
    // console.log(addForm.value);
    const activity = addForm.value as Activity;
    activity.date = formatDate(activity.date, 'dd/MM/yyyy', this.locale);
    this.activityService.addActivity(activity);
    window.location.reload();
  }

  public onUpdateActivity(activity: Activity): void {
    //console.log(activity);
    activity.date = formatDate(activity.date, 'dd/MM/yyyy', this.locale);
    this.activityService.updateActivity(activity);
    window.location.reload();
  }

  public onDeleteActivity(activityId: number): void {
    this.activityService.deleteActivity(activityId);
    window.location.reload();
  }

  public searchActivitys(key: string): void {
    console.log(key);
    const results: Activity[] = [];
    for (const activity of this.activitysList) {
      if (activity.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || activity.lieu.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(activity);
      }
    }
    this.activitysList = results;
    if (results.length === 0 || !key) {
      this.getActivities();
    }
  }

  public onOpenModal(activity: Activity, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addActivityModal');
    }
    if (mode === 'edit') {
      this.editActivity = activity;
      button.setAttribute('data-bs-target', '#updateActivityModal');
      //console.log(button.getAttribute('data-bs-target'));
      
    }
    if (mode === 'delete') {
      this.deleteActivity = activity;
      button.setAttribute('data-bs-target', '#deleteActivityModal');
    }
    if (mode === 'read') {
      this.readActivity = activity;
      console.log(this.readActivity, " mode: ", mode);
      
      button.setAttribute('data-bs-target', '#readActivityModal');
    }
    container?.appendChild(button);
    button.click();

  }

}
