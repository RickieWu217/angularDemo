import { ShareModule } from './share/share.module';
import { LoginModule } from './login/login.module';
import { LocalStorageService } from './_service/local-storage.service';
import { LoginService } from './login/login.service';
import { PagesModule } from './pages/pages.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppConfig } from './app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    LoginModule,
    HttpClientModule,
    ShareModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AppConfig,LoginService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
