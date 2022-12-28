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

  // public get(): Promise<Activity[]> {
  //   const url:string = this.apiBaseUrl+"/activity";
  //   return this.http.get(url).toPromise()
  //       .then(response => { response as Activity[];
  //         //console.log("response: ",response);
  //       })
  //       .catch(this.handleError);
  // }

  public get(): Observable<any> {
    const url:string = this.apiBaseUrl+"/members";
    return this.http.get(url);
  }

  private handleError(err: any): Promise<any>{
    console.log("Something went wrong ", err);
    return Promise.reject(err.message || err);
  }
}
