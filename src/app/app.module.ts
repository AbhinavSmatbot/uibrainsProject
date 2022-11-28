import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTamplateComponent } from './components/header-tamplate/header-tamplate.component';
import { AddItemTableComponent } from './components/add-item-table/add-item-table.component';
import { SidebarMainComponent } from './components/sidebar-main/sidebar-main.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
// import { CustomerService } from './services/customer.service';
import { AdminModule } from './admin/admin.module';
import { GithubMainComponent } from './components/github-main/github-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTamplateComponent,
    AddItemTableComponent,
    SidebarMainComponent,
    SendMessageComponent,
    ViewMessageComponent,
    LoginComponent,
    EmployeeComponent,
    GithubMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // CustomerService
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
