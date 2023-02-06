import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age=18;
  img1 = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = { //OBJETO PERSONA
    name: "nicolas",
    age: 20,
    avatar: "https://source.unsplash.com/random"
  }

  //METODOS
  activ_desactiv_btn (){
    this.btnDisabled= !this.btnDisabled;
  }
  aument_edad(){
    this.person.age+=1;
  }
  onScroll (event:Event){
    const element = event.target as HTMLElement; //por ser div
    console.log(element.scrollTop);
  }
  changeName(event:Event){
    const element = event.target as HTMLInputElement; //por ser input
    this.person.name = element.value;

  }
}
