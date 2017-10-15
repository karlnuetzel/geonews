import {Story} from "../model/story.model";
import {Injectable} from "@angular/core";
import {StoryStackService} from "../services/story-stack.service";
import {ProjectionService} from "../services/projection.service";
import {BigDataService} from "../services/bigdata.service";
import * as d3Selection from "d3-selection";

@Injectable()
export class DrawService {

  private svg: any;
  private circles: any;

  constructor(private storyStackService: StoryStackService, private projectionService: ProjectionService, private bigData: BigDataService) {
    this.getSVG();
  }

  public getSVG() {
    this.svg = document.getElementById('map');
  }

  public getCounty(story: Story): Promise<Story> {
    return new Promise((resolve, reject) => {
      let latitude = story.latitude;
      let longitude = story.longitude;
      this.projectionService.getCounty(latitude, longitude)
        .then((obj) => {
          let id = obj.id;
          let string = this.bigData.returnGeoData();
          let json = JSON.parse(string);
          json.features.forEach((feature) => {
            if (feature.id == id) {
              let x = feature.geometry.coordinates[0][0][0];
              let y = feature.geometry.coordinates[0][0][1];
              story.latitude = x;
              story.longitude = y;
              resolve(story);
            }
          })
          reject();
        })
        .catch((error) => {
          console.log(error);
        })
    });
  }

  public clearMap() {
    d3Selection.selectAll("circle").remove()
  }

  public drawStories(story: Story) {

    this.getCounty(story).then(
      (str) => {
        story = str;
        story.relatedStories.forEach(
          (relatedStory) => {
            this.getCounty(relatedStory).then(
              (str) => {
                relatedStory = str;

                console.log("SWAG");
                console.log(story);
                let originLat = story.latitude;
                let originLong = story.longitude;
                let targetLat;
                let targetLong;
                d3Selection.select("svg").append("circle")
                  .attr("cx", originLat)
                  .attr("cy", originLong)
                  .attr("r", 10)
                  // .on("click", this.storyStackService.push(story))
                  .on("mouseover", () => {
                    story.relatedStories.forEach(
                      (relatedStory) => {
                        targetLat = relatedStory.latitude;
                        targetLong = relatedStory.longitude;
                        this.drawLines(originLat, originLong, targetLat, targetLong);
                      }
                    )
                  })
                .on("mouseout", () => { d3Selection.selectAll("line").remove()});
                story.relatedStories.forEach(
                  (relatedStory) => {
                    targetLat = relatedStory.latitude;
                    targetLong = relatedStory.longitude;
                    let circle = d3Selection.select("svg").append("circle")
                      .attr("cx", targetLat)
                      .attr("cy", targetLong)
                      .attr("r", 5)
                      // .on("click", this.storyStackService.push(relatedStory))
                      .on("mouseover", (circle) => {
                        this.drawLines(originLat, originLong, relatedStory.latitude, relatedStory.longitude);
                      })
                      .on("mouseout", () => { d3Selection.selectAll("line").remove()});
                  }
                )
              }
            )
          }
        )
      }
    );
  }

  public drawLines(originLat: any, originLong: any, targetLat: any, targetLong) {
    d3Selection.select("svg").append("line")
      .style("stroke", "black")
      .attr("x1", originLat)
      .attr("y1", originLong)
      .attr("x2", targetLat)
      .attr("y2", targetLong);
  }

}
