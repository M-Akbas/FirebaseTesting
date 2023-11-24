import { Component, inject } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allUsers: any = [];
  title = 'FirebaseApp';
  firestore: Firestore = inject(Firestore);
  counter: number = 0;
  nameOfUser!:string; 
  
  constructor() {
    this.getUserFromFirestore();
  }


  async getUserFromFirestore() {
    this.allUsers = [];
    const usersRef = collection(this.firestore, "allUser");
    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach((doc) => {
      this.allUsers.push(doc.data());
    })
    this.showNameOfUser();
  };

  showNameOfUser() {
    for (let i = 0; i < this.allUsers.length; i++) {
      const userName = this.allUsers[i].name;
      console.log(userName)
      this.nameOfUser = userName;
      
    }
  }
}