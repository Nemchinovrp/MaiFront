import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageService} from './service/storage.service';
import {CurrencyService} from './service/currency.service';
import {UserService} from './service/user.service';
import {VacancyService} from './service/vacancy.service';
import {ResumeService} from './service/resume.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService, CurrencyService, UserService, VacancyService, ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
