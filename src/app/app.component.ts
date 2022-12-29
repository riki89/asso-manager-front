import { Component, OnInit } from '@angular/core';
import { ActivityService } from './services/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'asso-manager';

  data: Array<any> = [];

  constructor(private activityService: ActivityService){}

  ngOnInit(): void {
      this.getActivities();
      console.log("data: ",this.data);
      
  }

  public getActivities(): void {
    this.activityService.get().subscribe(data => {
      this.data = data;
      //console.log("data2: ", data);
    });
  }

}
