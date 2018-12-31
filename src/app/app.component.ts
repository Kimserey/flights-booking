import { Component, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'flights-booking';
  map:  mapboxgl.Map;

  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltc2VyZXkwMSIsImEiOiJjanFjbjdsMjQzeDZlNDNwcDd3eGl1Nzl6In0.hgMiXO9FMV26b8X8TANLAw';  
  }
  
  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }
}