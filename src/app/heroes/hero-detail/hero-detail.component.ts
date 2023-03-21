import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$ : Observable<Hero>

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : HeroService
  ) { 
    console.log(this.hero$);

  }

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.service.getHeroById(params.get('id'))
      )
    )
  }

  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }

}
