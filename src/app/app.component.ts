import { Component,OnInit} from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

employeeNames : any;
allNames : any
  
constructor(private appService : AppServiceService) {
 }

 ngOnInit() {
  this.appService.get().subscribe((data) => {
    this.employeeNames = data
    console.warn(data)
    }); 
    this.appService.getAll().subscribe((data) => {
      this.allNames = data
      console.warn(data)
      }); 
 }

getNames() {
  this.appService.get().subscribe((data) => {
    this.employeeNames = data
    console.warn(data)
    }); 
}

getAllNames() {
  this.appService.getAll().subscribe((data) => {
    this.allNames = data
    console.warn(data)
    }); 
}

onSubmit(names:any) {
  this.appService.post(names).subscribe((names) => {
  console.warn(names)
  });     
  }
}