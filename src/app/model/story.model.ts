export class Story {
  public static readonly EMPTY_STORY: Story = new Story("EMPTY_STORY");

  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
