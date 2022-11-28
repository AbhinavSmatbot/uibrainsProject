import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
// import { GithubMainComponent } from '../components/github-main/github-main.component';





@NgModule({
  declarations: [
    // GithubMainComponent,

  
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ]
})
export class AdminModule { }
