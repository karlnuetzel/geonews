import {Component, OnInit} from "@angular/core";
import {Story} from "../model/story.model";
import {StoryService} from "../services/story.service";

@Component({
  selector: "geo-news-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"]
})
export class StoriesComponent implements OnInit {
  stories: Array<Story> = [];

  constructor(private storyService: StoryService) {
  }

  ngOnInit(): void {
    this.storyService.getTopStories().then(
      (topStories: Array<Story>): void => {
        this.stories = topStories;
      }
    ).catch(
      (error: any): void => {
        console.error(error);
      }
    );
  }
}
