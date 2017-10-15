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
        resolve([new Story("Donald trump is president forever now."), new Story("Stephen paddock was a PACIFIST? Find out more here"), new Story("Critics of IntelliJ fall behind as their master race counterparts develop at an accelerated pace.")]);
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
        resolve([new Story("Donald trump is president forever now."), new Story("Stephen paddock was a PACIFIST? Find out more here"), new Story("Critics of IntelliJ fall behind as their master race counterparts develop at an accelerated pace.")]);
      }
    );
  }
}
