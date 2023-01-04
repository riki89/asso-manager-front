import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompteRendu } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CompteRenduService {

  private apiBaseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    const url:string = this.apiBaseUrl+"/compteRendu";
    return this.http.get(url);
  }

  public add(compteRendu:CompteRendu): Promise<CompteRendu> {
    const url:string = this.apiBaseUrl+"/compteRendu/add";
    return this.http.post(url, compteRendu).toPromise()
        .then(response => response as CompteRendu)
        .catch(this.handleError);
  }

  public delete(compteRenduId:number): Promise<void> {
    const url:string = this.apiBaseUrl+"/compteRendu/"+compteRenduId;
    return this.http.delete(url).toPromise()
        .then(response => response as CompteRendu)
        .catch(this.handleError);
  }

  public update(compteRendu:CompteRendu): Promise<CompteRendu> {
    const url:string = this.apiBaseUrl+"/compteRendu/"+compteRendu.id;
    return this.http.put(url, compteRendu).toPromise()
        .then(response => response as CompteRendu)
        .catch(this.handleError);
  }

  private handleError(err: any): Promise<any>{
    console.log("Something went wrong ", err);
    return Promise.reject(err.message || err);
  }
}
