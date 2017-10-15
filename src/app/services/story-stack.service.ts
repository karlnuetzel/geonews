import {Story} from "../model/story.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class StoryStackService {
  private static storyStack: Array<Story> = [];

  public onStoryStackChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  public push(story: Story) {
    StoryStackService.storyStack.push(story);
    this.onStoryStackChanged.emit();
  }

  public pop(): Story {
    const POPPED_STORY: Story = StoryStackService.storyStack.pop();
    if (POPPED_STORY != null) {
      this.onStoryStackChanged.emit();
    }
    return POPPED_STORY;
  }

  public currentStory(): Story {
    if (StoryStackService.storyStack.length > 0) {
      return StoryStackService.storyStack[StoryStackService.storyStack.length - 1];
    } else {
      return Story.EMPTY_STORY;
    }
  }
}
