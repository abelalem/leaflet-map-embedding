// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useState } from 'react';
import MapEmbeddingReactLeaflet from './map-embedding-react-leaflet/map-embedding-react-leaflet'
import MapEmbeddingLeaflet from './map-embedding-leaflet/map-embedding-leaflet'

export function App() {
  enum LeafletOption {
    reactLeaflet = 'react-leaflet',
    leaflet = 'leaflet'
  }
  const [selectedOption, setSelectedOption] = useState(LeafletOption.reactLeaflet);
  const [selectedLocations, setSelectedLocations] = useState<{
    id: number,
    name: string;
    gpsCoordinate: {
      latitude: number,
      longitude: number
    }
  }[]>([]);
  const [locations, setLocations] = useState<{
    id: number
    selected: boolean
    name: string,
    gpsCoordinate: {
      latitude: number,
      longitude: number
    }
  }[]>([
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
  ]);

  const onMapEmbeddingOptionSelect = (event: any) => {
    setSelectedOption(event.target.value);
  }

  const onLocationSelect = (event: any) => {
    const selectedId = parseInt(event.target.value);

    if(isNaN(selectedId)) {
      return;
    }

    const locationIndex = locations.findIndex(l => l.id === selectedId);

    if(locationIndex < 0) {
      return;
    }

    locations[locationIndex].selected = !locations[locationIndex].selected;

    setLocations(locations);

    setSelectedLocations(locations.filter(l => l.selected)?.map(l => {
      return {
        id: l.id,
        name: l.name,
        gpsCoordinate: l.gpsCoordinate
      }
    }) ?? []);
  }

  return (
    <div className={styles.container}>
      {
        selectedOption === LeafletOption.reactLeaflet ? (
          <MapEmbeddingReactLeaflet locations={selectedLocations} />
        ):(
          <MapEmbeddingLeaflet />
        )
      }
      <div className={styles.mapEmbeddingOptionContainer}>
          <div>
            <label className={styles.mapEmbeddingOption}>
              <input type="radio" name="mapEmbeddingOption" value={LeafletOption.reactLeaflet} onClick={onMapEmbeddingOptionSelect} defaultChecked={selectedOption === LeafletOption.reactLeaflet}/>
              <div>Map Embedding using react-leaflet</div>
            </label>
          </div>
          <div>
            <label className={styles.mapEmbeddingOPtion}>
              <input type="radio" name="mapEmbeddingOption" value={LeafletOption.leaflet} onClick={onMapEmbeddingOptionSelect} />
              <div>Map Embedding using only leaflet</div>
            </label>
          </div>
      </div>
      <div>
        <table className={styles.locationsTable}>
          <thead>
            <tr>
              <th rowSpan={2} className={styles.locationsHeader}>Location name</th>
              <th colSpan={2} className={styles.locationsHeader}>Gps Coordinate</th>
            </tr>
            <tr>
              <th className={styles.locationsHeader}>Latitude</th>
              <th className={styles.locationsHeader}>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {
              locations.map(loc => {
                return (
                  <tr key={loc.id}>
                    <td className={styles.locationsData}>
                      <label>
                        <input type='checkbox' defaultChecked={loc.selected} value={loc.id} onClick={onLocationSelect}/>
                        {loc.name}
                      </label>
                    </td>
                    <td className={styles.locationsData}>
                      {loc.gpsCoordinate.latitude}
                    </td>
                    <td className={styles.locationsData}>
                      {loc.gpsCoordinate.longitude}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
