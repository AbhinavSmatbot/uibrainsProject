import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMainComponent } from './components/sidebar-main/sidebar-main.component';
import { AddItemTableComponent } from './components/add-item-table/add-item-table.component';
import { LoginComponent } from './components/login/login.component';
import { GithubMainComponent } from './components/github-main/github-main.component';

const routes: Routes = [
  { path: "", component: AddItemTableComponent },
  { path: "sidebar", component: SidebarMainComponent },
  { path: "login", component: LoginComponent},
  { path:"github-main", component:GithubMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
