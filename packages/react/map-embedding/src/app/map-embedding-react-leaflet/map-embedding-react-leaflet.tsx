import { useState, useEffect, useMemo } from 'react';
import { LatLngLiteral } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import styles from './map-embedding-react-leaflet.module.css';
import 'leaflet/dist/leaflet.css';

/* eslint-disable-next-line */
interface Location {
  id: number,
  name: string,
  gpsCoordinate: {
    latitude: number,
    longitude: number
  }
}
export interface MapEmbeddingReactLeafletProps {
  locations: Location[]
}

export function MapEmbeddingReactLeaflet({ locations }: MapEmbeddingReactLeafletProps) {
  const defaultCenter: LatLngLiteral = useMemo(() => { return {lat: 9.0045, lng: 38.7598}; }, []);
  const defaultZoom: number = useMemo(() => { return 2 }, []);
  const [center, setCenter] = useState<LatLngLiteral>(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);

  useEffect(()  => {
    if(locations.length === 0) {
      setCenter(defaultCenter);
      setZoom(defaultZoom);
      return;
    }

    const latitude = locations.map(location => location.gpsCoordinate.latitude).sort((a, b) => a - b);
    const longitude = locations.map(location => location.gpsCoordinate.longitude).sort((a, b) => a - b);
    const latitudeWidth = latitude[latitude.length - 1] - latitude[0];
    const longitudeWidth = longitude[longitude.length - 1] - longitude[0];
    const tileWidth = latitudeWidth > longitudeWidth ? latitudeWidth : longitudeWidth;
    const center: LatLngLiteral = {
      lat: (latitude[0] + latitude[latitude.length - 1])/2,
      lng: (longitude[0] + longitude[longitude.length - 1])/2
    }
    const zoom = tileWidth === 0 ? Math.round(Math.log(360/0.05)/Math.log(2)) :Math.round(Math.log(360/tileWidth)/Math.log(2));

    setCenter(center);
    setZoom(zoom);
  }, [defaultCenter, defaultZoom, locations])

  interface SetMapViewProp {
    gpsCoordinate: LatLngLiteral,
    zoom: number
  }
  const SetMapView = ({ gpsCoordinate, zoom }: SetMapViewProp ) => {
    const map = useMap();
    map.setView(gpsCoordinate, zoom);

    return null;
  }

  return (
    <div className={styles.container}>
      <h1>Map Embedding React-Leaflet</h1>
      <div className={styles.mapContainer}>
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            maxZoom={19}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {
            locations.map(location => (
                <Marker key={location.id} position={[location.gpsCoordinate.latitude, location.gpsCoordinate.longitude]} >
                  <Popup>{ location.name  }</Popup>
                </Marker>
              )
            )
          }
          <SetMapView gpsCoordinate={center} zoom={zoom}/>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapEmbeddingReactLeaflet;
