import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService  {

  constructor(private http: HttpClient) { }


  get() {
    return this.http.get('http://localhost:3000/getNames')
  }

  getAll() {
    return this.http.get('http://localhost:3000/getAllNames')
  }

  post(employeeNames : any) {
    return this.http.post('http://localhost:3000/postNames', employeeNames)
  }

}
