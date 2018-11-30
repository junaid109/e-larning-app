import { Component } from '@angular/core';
import {initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
        // Initialize Firebase
        var config = {
          apiKey: "AIzaSyCJ55vcIM-DR8sbY8NF2zh8aI7E-X0vFK8",
          authDomain: "e-learning-app-1d02f.firebaseapp.com",
          databaseURL: "https://e-learning-app-1d02f.firebaseio.com",
          projectId: "e-learning-app-1d02f",
          storageBucket: "e-learning-app-1d02f.appspot.com",
          messagingSenderId: "900334224202"
        };
        firebase.initializeApp(config);
      
        var root = firebase.database().ref();
      
        root.on('value', function(snap) {
            console.log(snap.val());
        })  
  }

}
