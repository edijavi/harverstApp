import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PublicRoutingModule } from './public-routing.module';
import { HelpComponent } from './components/help/help.component';
import { ToolbarLoggedComponent } from './components/toolbar-logged/toolbar-logged.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    HelpComponent,
    ToolbarLoggedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PublicRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
    exports: [
        ToolbarComponent,
        HelpComponent,
        ToolbarLoggedComponent
    ]
})
export class PublicModule { }
