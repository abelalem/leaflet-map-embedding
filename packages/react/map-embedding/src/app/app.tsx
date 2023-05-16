// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import * as L from 'leaflet';

export function App() {
  const locations: {
    locationId: number
    locationName: string,
    gpsCoordinate: {
      latitiude: string,
      longitude: string
    }
  }[] = [];

  const selectedLocations: {
    locationId: number,
    latitude: number,
    longitude: number,
    marker: L.Marker
  }[] = [];
  return (
    <div>
      Welcome to react map embedding
    </div>
  );
}

export default App;
