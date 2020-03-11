import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {PublicRoutingModule} from './public-routing.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class PublicModule { }
