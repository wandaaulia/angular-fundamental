import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { TasksComponent } from './components/tasks/tasks.component';
import { LearnFormComponent } from './learn-form/learn-form.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'learn-form',
    component: LearnFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard] 
  },
  {
    // ini di load ketika mau ke halaman ini. 
    // menggunakan lazy loading dapat reduce the initial bundle size
    path: 'hero-form',
    loadChildren: () => import('./hero-form/hero-form.module').then(m => m.HeroFormModule)
  },
  {
    // ini di load di background ketika apps pertama kali dibuka. 
    // jadi ketika mau ke halaman ini, halaman ini sudah siap. 
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: {
      preload: true
    }
  },
  {
    path: 'task',
    component: TasksComponent
  },
  { 
    path: '**',
    component: PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, 
    {
      enableTracing: false,
      preloadingStrategy : PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
