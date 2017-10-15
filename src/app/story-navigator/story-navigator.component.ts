import {Component, OnInit} from "@angular/core";
import {Story} from "../model/story.model";

@Component({
  selector: "geo-news-story-navigator",
  templateUrl: "./story-navigator.component.html",
  styleUrls: ["./story-navigator.component.scss"]
})
export class StoryNavigatorComponent implements OnInit {
  public currentStory: Story = Story.EMPTY_STORY;

  constructor() {
  }

  ngOnInit(): void {
  }
}
