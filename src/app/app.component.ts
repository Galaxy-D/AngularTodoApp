import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTodoApp';
  constructor(){
     // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDtNpZGH1pylDahxyqLbW_uZbjdTGdWASE",
      authDomain: "angulartodoapp-9bdca.firebaseapp.com",
      databaseURL: "https://angulartodoapp-9bdca.firebaseio.com",
      projectId: "angulartodoapp-9bdca",
      storageBucket: "angulartodoapp-9bdca.appspot.com",
      messagingSenderId: "1038504843846",
      appId: "1:1038504843846:web:cbe6712fbb7e7caa6a8847",
      measurementId: "G-BF26QFYWGB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
