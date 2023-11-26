import { inject, Inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { DasboardComponent } from 'src/app/dasboard/dasboard.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  firestore: Firestore = inject(Firestore)
  array:any  = [];

  constructor(private dasboard: DasboardComponent) { 

  }

  allUserCol = collection(this.firestore, "allUser");
  

  async getUserFromFirestore() {
    const usersRef = collection(this.firestore, "allUser");
    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach((doc) => {
    this.dasboard.allUsers(doc.data());
    })
  }; 

  
  async sendDoc(firstName: string, age: number) {
    const docRef = await addDoc(this.allUserCol, {
      name: firstName,
      age: age,
    });
    


  }

 
  
}
