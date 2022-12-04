import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private apiBaseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public get(): Promise<Member[]> {
    const url:string = this.apiBaseUrl+"/members";
    return this.http.get(url).toPromise()
        .then(response => { response as Member[];
           console.log("result: ", response);
        })
        .catch(this.handleError);
  }

  public add(member:Member): Promise<Member> {
    const url:string = this.apiBaseUrl+"/members";
    return this.http.post(url, member).toPromise()
        .then(response => response as Member)
        .catch(this.handleError);
  }

  public delete(memberId:number): Promise<void> {
    const url:string = this.apiBaseUrl+"/members/"+memberId;
    return this.http.delete(url).toPromise()
        .then(response => response as Member)
        .catch(this.handleError);
  }

  public update(member:Member): Promise<Member> {
    const url:string = this.apiBaseUrl+"/members/"+member.id;
    return this.http.put(url, Member).toPromise()
        .then(response => response as Member)
        .catch(this.handleError); 
  }

  private handleError(err: any): Promise<any>{
    console.log("Something went wrong ", err);
    return Promise.reject(err.message || err);
  }
}
