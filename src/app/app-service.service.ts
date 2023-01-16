import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService  {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/postNames'

  getNamesFromAPI() {
    return this.http.get('http://localhost:3000/getNames')
  }

  saveNamesToAPI(employeeNames : any) {
    return this.http.post(this.url, employeeNames)
  }

}
