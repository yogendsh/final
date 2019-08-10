import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DemandManagerComponent } from './demand-manager/demand-manager.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HighchartsChartComponent } from 'highcharts-angular';
import { TableComponent } from './table/table.component';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,LogoutComponent,
    DemandManagerComponent,HeaderComponent,
    HighchartsChartComponent,
    TableComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([]),
    HttpClientModule,
    ButtonModule,
    DynamicDialogModule
   
  ],
 
  providers: [AuthenticationService,DialogService],
  bootstrap: [AppComponent],

 
  
})
export class AppModule { }

