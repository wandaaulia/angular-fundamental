import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { uid } from 'uid';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes : any[] = HEROES;

  constructor() { }


  getHeroes() : Observable<Hero[]> {
    return of(this.heroes);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
          // (+) before `id` turns the string into a number
      map((heroes : Hero[]) => heroes.find(hero => hero.id === +id))
    )
  }

  getHeroById(id: number | string) : Observable<any> {
    console.log(id);

    const heroId = this.heroes.find(p => p.id === +id);
    console.log(heroId);
    return of(heroId);
  }

  addHero(i: number, name : string) {
    console.log(i, name);
    this.heroes.push({id: i, name});
    return of(name);
  }

  deleteHero(id: number) : Observable<any> {
     const indexDelete = this.heroes.findIndex(p => p.id === id);
     if( indexDelete >= 0) {
      this.heroes.splice(indexDelete, 1);
      return of(true);
     } else {
      return of(false);
     }
  }

}
