export class Story {
  public static readonly EMPTY_STORY: Story = new Story("EMPTY_STORY", null, null, null, null, null);

  title: string;
  description: string;
  url: string;
  date: Date;
  latitude: number;
  longitude: number;

  constructor(title: string, description: string, url: string, date: Date, latitude: number, longitude: number) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.date = date;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
