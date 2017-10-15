import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {
  constructor() {
  }

  public saveValueWithKey(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public fetchValueFromKey(key: string): any {
    return localStorage.getItem(key);
  }

  public deleteValueWithKey(key: string): void {
    localStorage.removeItem(key);
  }

  public clearAll(): void {
    localStorage.clear();
  }
}
