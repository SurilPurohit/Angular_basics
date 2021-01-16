import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitComponent } from './unit/unit.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: 'test',component: TestComponent},
  { path: 'unit',component: UnitComponent},
  { path: 'home',component: HomeComponent},
  { path: 'news',component: NewsComponent},
  
  { path: 'tours',
    loadChildren: () =>
    import('./tours/tours.module').then(mod =>
      mod.ToursModule)
  },

  { path: 'log',
    loadChildren: () =>
    import('./log/log.module').then(mod =>
      mod.LogModule)
  },
  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
  ],
  
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]

})

export class AppRoutingModule { }
