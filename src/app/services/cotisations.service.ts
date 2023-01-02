import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotisation } from '../models/cotisations';
import { Member } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CotisationsService {

  private apiBaseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    const url:string = this.apiBaseUrl+"/cotisations";
    return this.http.get(url);
  }
  // public get(): Promise<Cotisation[]> {
  //   const url:string = this.apiBaseUrl+"/cotisations";
  //   return this.http.get(url).toPromise()
  //       .then(response => { response as Cotisation[];
  //       console.log(response);
  //       })
  //       .catch(this.handleError);
  // }

  public add(cotisation:Cotisation): Promise<Cotisation> {
    const url:string = this.apiBaseUrl+"/cotisations";
    return this.http.post(url, cotisation).toPromise()
        .then(response => response as Cotisation)
        .catch(this.handleError);
  }

  public delete(cotisationId:number): Promise<void> {
    const url:string = this.apiBaseUrl+"/cotisations/"+cotisationId;
    return this.http.delete(url).toPromise()
        .then(response => response as Cotisation)
        .catch(this.handleError);
  }

  public update(cotisation:Cotisation): Promise<Cotisation> {
    const url:string = this.apiBaseUrl+"/cotisations";
    return this.http.put(url, cotisation).toPromise()
        .then(response => response as Cotisation)
        .catch(this.handleError); 
  }

  public getMember(memberId:number): Promise<Member> {
    const url:string = this.apiBaseUrl+"/cotisations/member/"+memberId;
    return this.http.get(url).toPromise()
        .then(response => { response as Member;})
        .catch(this.handleError);
  }

  private handleError(err: any): Promise<any>{
    console.log("Something went wrong ", err);
    return Promise.reject(err.message || err);
  }
}
