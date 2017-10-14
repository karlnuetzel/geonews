import { Component, OnInit, ElementRef, ViewEncapsulation} from '@angular/core';
import * as d3Selection from 'd3-selection';
import * as d3Json from 'd3-request';
import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson';

@Component({
  selector: 'geo-news-d3-map',
  templateUrl: './d3-map.component.html',
  styleUrls: ['./d3-map.component.scss'],
  encapsulation: ViewEncapsulation.None //wtf
})
export class D3MapComponent implements OnInit {

  private svg: any;
  private width: number;
  private height: number;

  private projection: any;
  private path: any;
  private g: any;

  constructor() {}

  ngOnInit() {

    this.initSvg();
    this.initPath();
    this.initMap();

  }

  private initSvg() {
    
    this.svg = d3Selection.select('svg');
    this.width = this.svg.attr('width');
    this.height = this.svg.attr('height');

  }

  private initPath(){
    this.path = d3Geo.geoPath();
  }

  private initMap(){
    //attr (attribute, value)
    d3Json.json("https://d3js.org/us-10m.v1.json", (error, us) => {
      if (error) throw error;

      this.svg
        .append('g')
        .attr('class', 'states')
        .selectAll('path')
        .data(topojson.feature(us, us.objects.states).features)
        .enter()
        .append('path')
        .attr('d', this.path)
        
      this.svg
        .append('path')
        .attr('class', 'state-borders')
        .attr('d', this.path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
        
    });
  }
}
