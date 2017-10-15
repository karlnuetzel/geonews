import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import * as topojson from "topojson";
import * as d3Json from "d3-request";
import * as d3Geo from "d3-geo";
import {BigDataService} from "../services/bigdata.service";

declare let $: any;

@Injectable()
export class ProjectionService {

  private path: any;

  constructor(private http:Http, private bigData: BigDataService) {
  }

  public getCounty(latitude: number, longitude: number): Promise<any>{
        return new Promise((resolve, reject)=>{
            let county = "wow this is great"
            let regex = /<County FIPS="(\d+)" name="(.+)"\/><State FIPS="(\d+)" code="([A-Z]{2})"/;
            this.http.get('http://data.fcc.gov/api/block/2010/find?latitude=' + latitude + '&longitude=' + longitude ).subscribe(
                (response)=>{
                    let match = response.text().match(regex);
                    if (match){
                        //let regex2 = new RegExp("(\d{2}),(\d{3}),(" + match[2] + " County)");
                        let data = this.bigData.returnData();
                        //let match2 = data.match(regex2);
                        console.log(match[2]);
                        if (data.includes(match[2])){
                            let fromIndex = 0;
                            let stringID = "";
                            let stateCode = "";
                            while (data.indexOf(match[2], fromIndex) != -1){
                                let index = data.indexOf(match[2], fromIndex);
                                fromIndex = index + 1;
                                let newIndex = index - 7;
                                for (let i = newIndex; i < index - 1; i++){
                                    stringID += data[i];
                                }
                                stringID = stringID.replace(',',"");
                                for (let i = newIndex - 3; i < newIndex; i++){
                                    stateCode += data[i];
                                }
                                stateCode = stateCode.replace(',',"");
                                if (stateCode != match[4]){
                                     stringID ="";
                                    stateCode = "";
                                    stringID = "";
                                }else{
                                    break;
                                }
                            }
                            console.log(stateCode);
                            console.log(stringID);
                            if (stateCode != ""){
                                d3Json.json("https://d3js.org/us-10m.v1.json", (error, us) => {
                                    if (error) {
                                        throw error;
                                    }
                                    this.path = d3Geo.geoPath();
                                    this.path(topojson.mesh(us, us.objects.counties, function(a, b) {
                                        if (a.id == stringID){
                                            console.log(a.id);
                                            resolve(a);
                                            return;
                                        }
                                        if (b.id == stringID){
                                            console.log(b.id);
                                            resolve(b);
                                            return;
                                        }
                                    }));
                                });
                            }
                        }
                    }else{
                        reject();
                    }
                }
            );
          }
        )
  }

}





