import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'leaflet-map-embedding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'leaflet map embedding';
  map: L.Map | null = null;
  selectedLocations: {
    locationId: number,
    latitude: number,
    longitude: number,
    marker?: L.Marker
  }[] = [];
  locations: {
    id: number,
    selected: boolean,
    name: string,
    gpsCoordinate: {
      latitude: number,
      longitude: number
    }
  }[] = [
    {
      id: 1,
      selected: false,
      name: 'Ethiopian Skylight Hotel',
      gpsCoordinate: {
        latitude: 8.987757,
        longitude: 38.790462
      }
    },
    {
      id: 2,
      selected: false,
      name: 'African Hall, Menelik II Avenue',
      gpsCoordinate: {
        latitude: 9.014755,
        longitude: 38.76419
      }
    },
    {
      id: 3,
      selected: false,
      name: 'Hilton Addis Ababa, Menelik II Avenue',
      gpsCoordinate: {
        latitude: 9.018698,
        longitude: 38.765036
      }
    },
    {
      id: 4,
      selected: false,
      name: 'Victory Monument, Arat Kilo',
      gpsCoordinate: {
        latitude: 9.032906,
        longitude: 38.763373
      }
    },
    {
      id: 5,
      selected: false,
      name: 'Ras Amba',
      gpsCoordinate: {
        latitude: 9.031738,
        longitude: 38.771069
      }
    },
    {
      id: 6,
      selected: false,
      name: 'Kokebe Tsibah, Comoros Street',
      gpsCoordinate: {
        latitude: 9.035765,
        longitude: 38.781005
      }
    },
    {
      id: 7,
      selected: false,
      name: 'Yeka Mikael, Fikre Mariam Aba Techan Street',
      gpsCoordinate: {
        latitude: 9.026688,
        longitude: 38.799593
      }
    },
    {
      id: 8,
      selected: false,
      name: 'Megenagna, Diaspora Square',
      gpsCoordinate: {
        latitude: 9.021524,
        longitude: 38.801322
      }
    },
    {
      id: 9,
      selected: false,
      name: 'Addis Ababa Bole International Airport',
      gpsCoordinate: {
        latitude: 8.985207,
        longitude: 38.796275
      }
    }
  ]

  ngOnInit() {
    this.map = L.map("map").setView([0, 0], 1);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  onLocationSelect = (id: number) => {
    const locationIndex = this.locations.findIndex(loc => loc.id == id)

    if(locationIndex >= 0) {
      this.locations[locationIndex].selected = !this.locations[locationIndex].selected;
    }

    if(!this.locations[locationIndex].selected) {
      this.removeMarkerFromMap(this.selectedLocations.find(s => s.locationId === id));
      this.selectedLocations = this.selectedLocations.filter(s => s.locationId != id);
      return;
    }

    this.selectedLocations.push({
      locationId: id,
      latitude: this.locations[locationIndex].gpsCoordinate.latitude,
      longitude: this.locations[locationIndex].gpsCoordinate.longitude,
      marker: this.addMarkerToMap(this.locations[locationIndex].gpsCoordinate.latitude, this.locations[locationIndex].gpsCoordinate.longitude)
    });
  }

  addMarkerToMap = (latitude: number, longitude: number) => {
    if(!this.map) {
      return;
    }

    return L.marker([latitude, longitude]).addTo(this.map);
  }

  removeMarkerFromMap = (selectedLocation?: {locationId: number, latitude: number, longitude: number, marker?: L.Marker}) => {
    if(!this.map || !selectedLocation) {
      return;
    }

    const marker = selectedLocation.marker;

    if(marker && this.map.hasLayer(marker)) {
      this.map.removeLayer(marker);
    }
  }
}
