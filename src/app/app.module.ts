import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';

import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';


const UX_MODULE = [
  TableModule,
  CalendarModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  ButtonModule,
  ToastModule,
  InputTextModule,
  ProgressBarModule,
  DropdownModule,
  MenuModule,
  BreadcrumbModule
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ...UX_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
