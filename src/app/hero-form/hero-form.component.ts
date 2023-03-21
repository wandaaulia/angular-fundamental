import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private http: HttpClient,
    private HeroService : HeroService) { }



  hasilName: string;
   j = 20;

    length : number;
   
  i : number = 1;

  powers = [
    "Really Smart", "Super Flexible", "Super Hot", "Weather Changer"
  ]

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');



  submitted = false;
  

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {

  }

  newHero() {
    this.model = new Hero(42, '', '')
  }

  addHero() {

    this.HeroService.getHeroes().subscribe(p => {
      length = 10 + p.length;
    })

    this.HeroService.addHero(length+1, this.model.name).subscribe(n => {
      this.hasilName = n;
    })

  }

  

}
