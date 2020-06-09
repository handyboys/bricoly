import { Component, OnInit } from '@angular/core';
import { Coordinates } from '../../interfaces/coordinates';

@Component({
  selector: 'app-select-job-location',
  templateUrl: './select-job-location.component.html',
  styleUrls: ['./select-job-location.component.scss']
})
export class SelectJobLocationComponent implements OnInit {
  marker: Coordinates = {
    lat: 36.7973267,
    lng: 10.1362181
  }
  mapZoom: number = 11;

  constructor() { }

  ngOnInit(): void {
    // this.setCurrentLocation();
  }

  /**
   * @function placeMarker replaces marker on newly selected position
   * @param { Object } position - contains newly selected coordinates 
   */
  placeMarker(position: any) {
    console.log(this.mapZoom)
    this.marker.lat = position.coords.lat;
    this.marker.lng = position.coords.lng;
  }
  /**
   * @function browserHasGeolocation Checks if browser has geolocation
   * @returns { Boolean } - True if geolocation is available, false otherwise
   */
  private browserHasGeolocation() {
    return 'geolocation' in navigator;
  }
  /**
   * @function setCurrentLocation Get client current position
   * @returns { void } - sets marker coords to current location
   */
  setCurrentLocation(): void {
    if (this.browserHasGeolocation()) {
      navigator.geolocation.getCurrentPosition(position => {
        this.marker.lat = position.coords.latitude;
        this.marker.lng = position.coords.longitude;
      })
    }
  }
}
