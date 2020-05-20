import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstAngular';
  price = 300;
  isButtonDisabled = false;
  url = "http://placehold.it/200x200"
  userData = "Default value";

  profile = {
    name : "Person 1",
    age : 30
  }


  constructor(){
    setTimeout(() => {
      this.title = "Changed Value"
    },5000)
  }

  sendMessage(){
    alert("The Message is Displayed")
  }

  sendMessage2(){
    alert("Meesage from 2")
  }

  display(){
    alert("Display Called")
  }


}
