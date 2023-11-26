import { Component, inject } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ServiceService } from '../shared/services/service.service';


@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent {
  firestore: Firestore = inject(Firestore);

  allUsers: any = [];
  showFiller = false;

  ngOnInit(){
    this.loadFromDB();
  }
  loadFromDB(){

  }
  constructor(public dialog: MatDialog, private service: ServiceService) {
   
  }

  

  openDialog() {
    this.dialog.open(DialogComponent)
  }
  
 

  

  

  

}
