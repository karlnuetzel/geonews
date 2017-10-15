import {Component, Input, OnInit} from "@angular/core";
import {Story} from "../model/story.model";

@Component({
  selector: "geo-news-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"]
})
export class StoryComponent implements OnInit {
  @Input()
  story: Story;

  @Input()
  rank: number;

  constructor() {
  }

  ngOnInit(): void {
  }
}
