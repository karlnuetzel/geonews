import {Component, OnInit} from "@angular/core";
import {Story} from "../model/story.model";
import {StoryService} from "../services/story.service";
import {DrawService} from "../services/draw.service";
import {StoryStackService} from "../services/story-stack.service";

@Component({
  selector: "geo-news-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"]
})
export class StoriesComponent implements OnInit {
  stories: Array<Story> = [];

  constructor(private storyService: StoryService,
              private drawService: DrawService,
              private storyStackService: StoryStackService) {
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

  storyClicked(story: Story): void {
    this.drawService.clearMap();

    this.storyStackService.push(story);

    this.storyService.getRelatedStories(story).then(
      (relatedStories: Array<Story>): void => {
        this.drawService.drawStories(story, relatedStories);
      }
    ).catch(
      (error: any): void => {
        console.error(error);
      }
    );
  }
}
