import { Component, OnInit } from '@angular/core';
import { Learn } from './learn';

@Component({
  selector: 'app-learn-form',
  templateUrl: './learn-form.component.html',
  styleUrls: ['./learn-form.component.css']
})
export class LearnFormComponent {

  constructor() { }


 
  formPerson = new Learn(1, 'rika', 'math', 'XII-C');

  allClass = [
    'XII-A', 'XII-B', 'XII-C'
  ]

  onSubmit() {
    console.log('test form');
    console.log(this.formPerson)

  }

}
