import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import * as d3Selection from "d3-selection";
import * as d3Json from "d3-request";
import * as d3Geo from "d3-geo";
import * as d3Scale from "d3-scale";
import * as topojson from "topojson";
import {DrawService} from "../services/draw.service";
import * as proj4 from "proj4";

@Component({
  selector: "geo-news-d3-map",
  templateUrl: "./d3-map.component.html",
  styleUrls: ["./d3-map.component.scss"],
  encapsulation: ViewEncapsulation.None // wtf
})
export class D3MapComponent implements OnInit {

  private svg: any;
  private path: any;
  private circles: any;
  private conversion: any;

  private albers: any;
  private mercator: any;

  constructor(private drawService: DrawService) {
  }

  ngOnInit() {

    this.initSvg();
    this.initProjection();
    this.initPath();
    this.initMap();

  }

  private initSvg() {

    this.svg = d3Selection
      .select("div#container")
      .append("svg")
      .attr("id", "map")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "-50 0 1000 667")// + (window.innerWidth / 1.2) + " " + window.innerHeight)
      .attr("id", "theSvg")
      .classed("svg-content-responsive", true);

  }

  private initProjection(){

  }

  private initPath() {
    this.path = d3Geo.geoPath();
  }

  private initMap() {

    d3Json.json("https://d3js.org/us-10m.v1.json", (error, us) => {
      if (error) {
        throw error;
      }

      this.svg
        .append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter()
        .append("path")
        .attr("d", this.path);

      this.svg
        .append("path")
        .attr("class", "state-borders")
        .attr("d", this.path(topojson.mesh(us, us.objects.states, function (a, b) {
          return a !== b;
        })));

      this.svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#777")
        .attr("stroke-width", 0.35)
        .attr("d", this.path(topojson.mesh(us, us.objects.counties, function(a, b) { return (a.id / 1000 | 0) === (b.id / 1000 | 0); })))
        .attr('id', 'arcpath');
    });

    let projection = d3Geo.geoMercator();
    this.path = d3Geo.geoPath()
      .projection(projection);
    let circle = this.svg.append("circle")
      .attr("cx",  	32.806671)
      .attr("cy", -86.791130)
      .attr("r", 20)
    this.path = d3Geo.geoPath();
  }

  drawCircles() {
    const CIRCLE_RADIUS: number = 3;
    const QUANTITY_ROWS: number = 60;
    const ROW_HEIGHT: number = 2 * CIRCLE_RADIUS;
    const QUANTITY_COLUMNS: number = 95;
    const COLUMN_WIDTH: number = 2 * CIRCLE_RADIUS;
    const SVG: any = d3Selection.select("svg");

    // for (let currentRow: number = 0; currentRow < QUANTITY_ROWS; currentRow++) {
    //   for (let currentColumn: number = 0; currentColumn < QUANTITY_COLUMNS; currentColumn++) {
    //     SVG
    //       .append("circle")
    //       .attr("cx", currentColumn * COLUMN_WIDTH)
    //       .attr("cy", currentRow * ROW_HEIGHT + (ROW_HEIGHT / 2))
    //       .attr("r", CIRCLE_RADIUS);
    //   }
    // }

    // 577.1659910357266,
    //   293.8780600766758

    SVG
      .append("circle")
      .attr("cx",  577.1659910357266)
      .attr("cy", 293.8780600766758)
      .attr("r", CIRCLE_RADIUS);
    // SVG
    //   .append("circle")
    //   .attr("cx", 0)
    //   .attr("cy", 605)
    //   .attr("r", CIRCLE_RADIUS);
    // SVG
    //   .append("circle")
    //   .attr("cx", 945)
    //   .attr("cy", 5)
    //   .attr("r", CIRCLE_RADIUS);
    // SVG
    //   .append("circle")
    //   .attr("cx", 945)
    //   .attr("cy", 605)
    //   .attr("r", CIRCLE_RADIUS);

    // for (let k = 0; k < 500; k++) {
    //   this.drawCircleAtLatLong(35.37, -122.0 + k * 0.1);
    // }
    //
    // this.drawCircleAtLatLong(38.786331, -90.500221);
    // this.drawCircleAtLatLong(32.789998, -96.802962);
    // this.drawCircleAtLatLong(36.104587, -114.990251);
  }

  drawCircleAtLatLong(latitude: number, longitude: number): void {
    const SVG: any = d3Selection.select("svg");
    const CIRCLE_RADIUS: number = 1;

    const SVG_X: number = this.longitiudeToSVGX(longitude) + 25;
    const SVG_Y: number = this.latitudeToSVGY(latitude, longitude) + 25;

    console.log("long: " + longitude + ", svg_x: " + SVG_X);
    console.log("lat: " + latitude + ", svg_y: " + SVG_Y);

    SVG.append("circle")
      .attr("cx", SVG_X)
      .attr("cy", SVG_Y)
      .attr("r", CIRCLE_RADIUS);
  }

  latitudeToSVGY(latitude: number, longitude: number): number {
    return (-23.26923077 * latitude) + 1163.461538 - (0.057 * Math.pow(longitude + 90, 2));
  }

  longitiudeToSVGX(longitude: number): number {
    return 15.22 * longitude + 1927.8;
  }

  // f(long) = 15.12 * long + 1927.8
  // f(lat) = -23.26923077 * lat + 1163.461538

  // f(long) = -12.576923076923077 * long + 127.5
  // f(lat) = -14.71474358974359 * lat - 50
}
