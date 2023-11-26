import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { OtherComponent } from './other/other.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, NgModel } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    DasboardComponent,
    OtherComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,

    provideFirebaseApp(() => initializeApp({ "projectId": "simplefirebaseap", "appId": "1:760073860350:web:a2a96fda79ec743faa21af", "storageBucket": "simplefirebaseap.appspot.com", "apiKey": "AIzaSyAlgIcqypJZX3wJUj7BRvynOhOVuiGv_P4", "authDomain": "simplefirebaseap.firebaseapp.com", "messagingSenderId": "760073860350" })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

