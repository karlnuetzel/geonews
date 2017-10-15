import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  private loggedIn: boolean = false;
  private email: string = null;

  constructor() {
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public login(email: string): void {
    this.loggedIn = true;
    this.email = email;
  }

  public logout(): void {
    this.loggedIn = false;
    this.email = null;
  }
}
