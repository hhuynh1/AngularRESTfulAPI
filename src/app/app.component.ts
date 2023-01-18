import { Component,OnInit} from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

userNames : any;
  
constructor(private appService : AppServiceService) {
  this.appService.getNamesFromAPI().subscribe((data) => {
    this.userNames = data;
  }); 
 }

onSubmit(names:any) {
  this.appService.saveNamesToAPI(names).subscribe((result) => { 
  console.warn(result)
  });     
  }
}