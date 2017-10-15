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
  topStories: Array<Story> = [];
  stories: Array<Story> = [];
  mode: string = "top";

  constructor(private storyService: StoryService,
              private drawService: DrawService,
              private storyStackService: StoryStackService) {
    storyStackService.onStoryStackChanged.subscribe(
      (): void => {
        const CURRENT_STORY: Story = this.getCurrentStory();
        if (CURRENT_STORY.title !== "No story selected") {
          this.mode = "related";
          this.stories = CURRENT_STORY.relatedStories;
        } else {
          this.mode = "top";
          this.stories = [];
          this.copyAIntoB(this.topStories, this.stories);
        }
      }
    );
  }

  ngOnInit(): void {
    this.storyService.getTopStories().then(
      (topStories: Array<Story>): void => {
        this.topStories = topStories;

        this.copyAIntoB(this.topStories, this.stories);
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
        story.relatedStories = relatedStories;
        this.drawService.drawStories(story);
        this.stories = relatedStories;
      }
    ).catch(
      (error: any): void => {
        console.error(error);
      }
    );
  }

  getCurrentStory(): Story {
    return this.storyStackService.currentStory();
  }

  switchMode(mode: string): void {
    this.mode = mode;
  }

  copyAIntoB(a: Array<any>, b: Array<any>): void {
    a.forEach(
      (aItem: any): void => {
        b.push(aItem);
      }
    );
  }
}
