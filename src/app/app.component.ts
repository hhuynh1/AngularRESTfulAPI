import { Component,OnInit} from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

employeeNames : any;
  
constructor(private appService : AppServiceService) {
  this.appService.getNamesFromAPI().subscribe((data) => {
    this.employeeNames = data;
  }); 
 }

onSubmit(employeeNames:any) {
  this.appService.saveNamesToAPI(employeeNames).subscribe((result) => {
  console.warn(result)
  });     
  }
}