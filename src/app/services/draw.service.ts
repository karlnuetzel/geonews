import {Injectable} from "@angular/core";
import {Story} from "../model/story.model";

@Injectable()
export class DrawService {
  constructor() {
  }

  clearMap(): void {
  }

  drawStories(mainStory: Story, relatedStories: Array<Story>): void {
  }
}
