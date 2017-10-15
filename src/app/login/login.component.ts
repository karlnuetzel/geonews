import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../services/local-storage.service";

// import {Configuration} from "../../configuration";

@Component({
  selector: "geo-news-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private http: Http,
              private router: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    const storedCredentials = this.localStorageService.fetchValueFromKey("_credentials");
    console.log(storedCredentials);
    if (storedCredentials !== null) {
      this.authService.login(storedCredentials.email);
      this.router.navigate(["/home"]);
    }
  }

  login(): void {
    const CREDENTIALS: any = {
      email: this.email,
      password: this.password
    };

    this.localStorageService.saveValueWithKey("_credentials", CREDENTIALS);
    this.authService.login(this.email);
    this.router.navigate(["/home"]);

    // this.http.post(
    //   Configuration.BACK_END_HOST_URL + "/login",
    //   CREDENTIALS,
    //   new RequestOptions({
    //     headers: new Headers({
    //       "Content-Type": "application/json"
    //     })
    //   })
    // ).subscribe(
    //   (response: Response): void => {
    //     const RESPONSE_BODY: any = response.json();
    //
    //     if (RESPONSE_BODY.authorized === true) {
    //       this.authService.login(this.email);
    //       this.router.navigate(["/home"]);
    //     } else {
    //       this.authService.logout();
    //     }
    //   }, (error: any): void => {
    //     console.error(error);
    //   }
    // );
  }
}
