export class Story {
  public static readonly EMPTY_STORY: Story = new Story("No story selected");

  title: string;
  relatedStories: Array<Story> = [];

  constructor(title: string) {
    this.title = title;
  }
}
