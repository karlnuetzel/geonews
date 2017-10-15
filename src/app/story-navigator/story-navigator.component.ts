import {Component, OnInit} from "@angular/core";
import {Story} from "../model/story.model";
import {StoryStackService} from "../services/story-stack.service";

@Component({
  selector: "geo-news-story-navigator",
  templateUrl: "./story-navigator.component.html",
  styleUrls: ["./story-navigator.component.scss"]
})
export class StoryNavigatorComponent implements OnInit {
  public currentStory: Story = Story.EMPTY_STORY;

  constructor(private storyStackService: StoryStackService) {
    storyStackService.onStoryStackChanged.subscribe(
      (): void => {
        this.currentStory = storyStackService.currentStory();
      }
    );
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.storyStackService.pop();
  }
}
