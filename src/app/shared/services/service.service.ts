import { inject, Inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  firestore: Firestore = inject(Firestore)
  array:any  = [];
  constructor() { 

  }

  allUserCol = collection(this.firestore, "allUser");
  
  
  async sendDoc(firstName: string, age: number) {
    const docRef = await addDoc(this.allUserCol, {
      name: firstName,
      age: age,
    });
    


  }

 
  
}
