import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import * as d3Selection from "d3-selection";
import * as d3Json from "d3-request";
import * as d3Geo from "d3-geo";
import * as d3Scale from "d3-scale";
import * as topojson from "topojson";
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

  constructor() {
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
}
