import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroFormRoutingModule } from './hero-form-routing.module';
import { HeroFormComponent } from './hero-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HeroFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HeroFormRoutingModule
  ]
})
export class HeroFormModule { }
