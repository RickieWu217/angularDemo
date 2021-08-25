import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
