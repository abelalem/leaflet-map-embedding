import styles from './map-embedding-react-leaflet.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

/* eslint-disable-next-line */
export interface MapEmbeddingReactLeafletProps {}

export function MapEmbeddingReactLeaflet(props: MapEmbeddingReactLeafletProps) {
  return (
    <div>
      <h1>Map Embedding React-Leaflet</h1>
      <div style={{
        width: '100%',
        height: '300px'
      }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]} >
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
