import { Component, inject, OnInit } from '@angular/core';
import { collection, doc } from '@angular/fire/firestore';
import { DasboardComponent } from '../dasboard/dasboard.component';
import { ServiceService } from '../shared/services/service.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{
  
  constructor(private service: ServiceService){
    
  }

 

  
  
  firstName!:string;
  age!:number;

  sendDocToDB(){
    this.service.sendDoc(this.firstName, this.age);
   
    
  }

  
 
}
