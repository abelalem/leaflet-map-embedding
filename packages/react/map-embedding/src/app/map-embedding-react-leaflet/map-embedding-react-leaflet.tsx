import styles from './map-embedding-react-leaflet.module.css';

/* eslint-disable-next-line */
export interface MapEmbeddingReactLeafletProps {}

export function MapEmbeddingReactLeaflet(props: MapEmbeddingReactLeafletProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MapEmbeddingReactLeaflet!</h1>
    </div>
  );
}

export default MapEmbeddingReactLeaflet;
