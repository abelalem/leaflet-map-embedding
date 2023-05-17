import styles from './map-embedding-leaflet.module.css';

/* eslint-disable-next-line */
export interface MapEmbeddingLeafletProps {}

export function MapEmbeddingLeaflet(props: MapEmbeddingLeafletProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MapEmbeddingLeaflet!</h1>
    </div>
  );
}

export default MapEmbeddingLeaflet;
