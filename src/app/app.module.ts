import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DxTabsModule, DxSelectBoxModule ,DxToolbarModule} from 'devextreme-angular';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { HomeComponent } from './pages/home/home.component';
import { StudentService } from './service/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentRegisterComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabsModule,
    DxToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DxSelectBoxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    DxDataGridModule



  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
