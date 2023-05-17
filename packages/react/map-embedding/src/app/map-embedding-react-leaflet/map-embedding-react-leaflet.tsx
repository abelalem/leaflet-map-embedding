import styles from './map-embedding-react-leaflet.module.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

/* eslint-disable-next-line */
export interface MapEmbeddingReactLeafletProps {}

export function MapEmbeddingReactLeaflet(props: MapEmbeddingReactLeafletProps) {
  return (
    <div className={styles.container}>
      <h1>Map Embedding React-Leaflet</h1>
      <div className={styles.mapContainer}>
        <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={false}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            maxZoom={19}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[0, 0]} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapEmbeddingReactLeaflet;
