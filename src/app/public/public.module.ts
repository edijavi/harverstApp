import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {PublicRoutingModule} from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    LoginComponent,
    SignUpComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
    exports: [
        ToolbarComponent,
        LoginComponent,
        SignUpComponent
    ]
})
export class PublicModule { }
