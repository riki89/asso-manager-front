import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiBaseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    const url:string = this.apiBaseUrl+"/activity";
    return this.http.get(url);
  }

  public addActivity(activity:Activity): Promise<Activity> {
    const url:string = this.apiBaseUrl+"/activity";
    return this.http.post(url, activity).toPromise()
        .then(response => response as Activity)
        .catch(this.handleError);
  }

  public deleteActivity(activityId:number): Promise<void> {
    const url:string = this.apiBaseUrl+"/activity/"+activityId;
    return this.http.delete(url).toPromise()
        .then(response => response as Activity)
        .catch(this.handleError);
  }

  public updateActivity(activity:Activity): Promise<Activity> {
    console.log(activity);
    
    const url:string = this.apiBaseUrl+"/activity/"+activity.id;
    return this.http.put(url, activity).toPromise()
        .then(response => response as Activity)
        .catch(this.handleError);
  }

  private handleError(err: any): Promise<any>{
    console.log("Something went wrong ", err);
    return Promise.reject(err.message || err);
  }
}
