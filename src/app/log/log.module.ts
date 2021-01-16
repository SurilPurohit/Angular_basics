import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LogComponent } from './log.component';
import { LogRoutingModule } from './log-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LogComponent],
  imports: [
    ReactiveFormsModule,
    LogRoutingModule,
    CommonModule
  ],
  bootstrap: [LogComponent]
})
export class LogModule { }

