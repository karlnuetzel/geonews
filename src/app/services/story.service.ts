import {Injectable} from "@angular/core";
import {Story} from "../model/story.model";
import {Http} from "@angular/http";

@Injectable()
export class StoryService {
  constructor(private http: Http) {
  }

  getTopStories(): Promise<Array<Story>> {
    return new Promise(
      (resolve: Function, reject: Function): void => {
        // this.http.post(
        //   Configuration.BACK_END_HOST_URL + "/top-stories",
        //   {},
        //   new RequestOptions({
        //     headers: new Headers({
        //       "Content-Type": "application/json"
        //     })
        //   })).subscribe(
        //   (response: Response): void => {
        //     const RESPONSE_BODY: Array<Story> = response.json();
        //     resolve(RESPONSE_BODY);
        //   }, (error: any): void => {
        //     reject(error);
        //   }
        // );
        resolve([new Story("Donald trump is president forever now."), new Story("Stephen paddock was a PACIFIST? Find out more here"), new Story("Critics of IntelliJ fall behind as their master race counterparts develop at an accelerated pace. ay ay ay ay ay yo")]);
      }
    );
  }

  getRelatedStories(story: Story): Promise<Array<Story>> {
    return new Promise(
      (resolve: Function, reject: Function): void => {
        // this.http.post(
        //   Configuration.BACK_END_HOST_URL + "/related-stories",
        //   {
        //     "story": story
        //   },
        //   new RequestOptions({
        //     headers: new Headers({
        //       "Content-Type": "application/json"
        //     })
        //   })).subscribe(
        //   (response: Response): void => {
        //     const RESPONSE_BODY: Array<Story> = response.json();
        //     resolve(RESPONSE_BODY);
        //   }, (error: any): void => {
        //     reject(error);
        //   }
        // );
        resolve([new Story("Google stock is down 10 dolla bill"), new Story("Host of good morning america in car accident"), new Story("Can your dog read your mind? The answer may surprise you"), new Story("The future is now: How AI is changing the world")]);
      }
    );
  }
}
