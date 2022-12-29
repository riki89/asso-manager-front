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

  public addActivity(candidat:Activity): Promise<Activity> {
    const url:string = this.apiBaseUrl+"/candidat";
    return this.http.post(url, candidat).toPromise()
        .then(response => response as Activity)
        .catch(this.handleError);
  }

  public deleteActivity(candidatId:number): Promise<void> {
    const url:string = this.apiBaseUrl+"/candidat/"+candidatId;
    return this.http.delete(url).toPromise()
        .then(response => response as Activity)
        .catch(this.handleError);
  }

  public updateActivity(candidat:Activity): Promise<Activity> {
    const url:string = this.apiBaseUrl+"/candidat/"+candidat.id;
    return this.http.put(url, candidat).toPromise()
        .then(response => response as Activity)
        .catch(this.handleError);
  }

  private handleError(err: any): Promise<any>{
    console.log("Something went wrong ", err);
    return Promise.reject(err.message || err);
  }
}
