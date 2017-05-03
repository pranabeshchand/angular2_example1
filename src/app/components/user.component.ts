import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `<h1>Hello {{name}}</h1>
    <p>{{address.street}} {{address.city}}</p>
    <u>
    <li *ngFor = "let hobby of hobbies; let i= index">{{hobby}}<button (click) = "deletelist(i)">X</button></li>
    </u>
    <form (submit)="addHobbies(hobby.value)">
    <label>Add Hobby</label>
    <input type="text" #hobby name="okk" [(ngModel)]="okk"/>
     </form>`,
})
export class UserComponent  {
    name:string;
    address: address;
    hobbies: string[];
    ok:string;
constructor(){
    this.name= "oye b";
    this.address = {
        street:'south city',
        city: 'gurugram'
    };
    this.hobbies = ["music",'dancing','surfing'];
}
    deletelist(i){
        this.hobbies.splice(i,1);
    }
    addHobbies(hobby){
        this.hobbies.push(hobby);
        this.okk = "";

     }
}
interface address{
    street:string;
    city:string;
}