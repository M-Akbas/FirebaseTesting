import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"simplefirebaseap","appId":"1:760073860350:web:a2a96fda79ec743faa21af","storageBucket":"simplefirebaseap.appspot.com","apiKey":"AIzaSyAlgIcqypJZX3wJUj7BRvynOhOVuiGv_P4","authDomain":"simplefirebaseap.firebaseapp.com","messagingSenderId":"760073860350"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
