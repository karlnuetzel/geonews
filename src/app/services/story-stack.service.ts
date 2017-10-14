import {Story} from "../model/story.model";

export class StoryStackService {
  private static storyStack: Array<Story> = [];

  public push(story: Story) {
    StoryStackService.storyStack.push(story);
  }

  public pop(): Story {
    return StoryStackService.storyStack.pop();
  }
}
