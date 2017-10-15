import {StoryService} from "../services/story.service";

export class Story {
  public static readonly EMPTY_STORY: Story = new Story("EMPTY_STORY", null, null, null, null, null, null);

  title: string;
  description: string;
  url: string;
  date: Date;
  latitude: number;
  longitude: number;

  relatedStories: Array<Story> = [];

  constructor(title: string, description: string, url: string, date: Date, latitude: number, longitude: number, storyService: StoryService) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.date = date;
    this.latitude = latitude;
    this.longitude = longitude;

    if (storyService) {
      storyService.getRelatedStories(this).then((stories) => {
        this.relatedStories = stories
      });
    }
  }
}
