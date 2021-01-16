import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ToursComponent } from './../tours/tours.component';

const routes: Routes = [
  {
    path: '',
    component: ToursComponent
  }
]

@NgModule({

  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ToursRoutingModule { }
