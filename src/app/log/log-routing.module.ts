import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class LogRoutingModule { }