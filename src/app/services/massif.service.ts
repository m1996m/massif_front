import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MassifService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    })
  };
  constructor(private http: HttpClient) {}

  //public getJSON(): Observable<any> {
    //return this.http.get("./assets/massifs.json");
  //}
  public getMassif(){
    return this.http.get('http://127.0.0.1:8000/massif',this.httpOptions)
  }
  public getMassifRegion(data:any){
    return this.http.post('http://127.0.0.1:8000/getMassifRegion',data,this.httpOptions);
  }
  public create(data:any){
    return this.http.post('http://127.0.0.1:8000/createMassif',data,this.httpOptions)
  }
}
