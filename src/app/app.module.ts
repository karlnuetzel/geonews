import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./guards/auth.gaurd";
import {HttpModule} from "@angular/http";
import {AuthService} from "./services/auth.service";
import {StoryNavigatorComponent} from "./story-navigator/story-navigator.component";
import {GeoNewsComponent} from "./geo-news/geo-news.component";
import {StoriesComponent} from "./stories/stories.component";
import {CommonModule} from "@angular/common";
import {D3Service} from "d3-ng2-service";
import { D3MapComponent } from './d3-map/d3-map.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "news",
    component: GeoNewsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    D3MapComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    StoryNavigatorComponent,
    GeoNewsComponent,
    StoryNavigatorComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    D3Service
  ],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
