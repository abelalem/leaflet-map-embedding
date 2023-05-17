// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React, { useState } from 'react';
import MapEmbeddingReactLeaflet from './map-embedding-react-leaflet/map-embedding-react-leaflet'
import MapEmbeddingLeaflet from './map-embedding-leaflet/map-embedding-leaflet'

export function App() {
  enum LeafletOption {
    reactLeaflet = 'react-leaflet',
    leaflet = 'leaflet'
  }
  const [selectedOption, setSelectedOption] = useState(LeafletOption.reactLeaflet);
  const [selectedLocations, setSelectedLocations] = useState<{
    locationId: number,
    latitude: number,
    longitude: number
  }[]>([]);



  const locations: {
    id: number
    selected: boolean
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
  ];

  const onMapEmbeddingOptionSelect = (event: any) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      {
        selectedOption === LeafletOption.reactLeaflet ? (
          <MapEmbeddingReactLeaflet />
        ):(
          <MapEmbeddingLeaflet />
        )
      }
      <div style={{
        display: 'flex',
        gap: '2rem'
      }}>
          <div>
            <label style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <input type="radio" name="mapEmbeddingOption" value={LeafletOption.reactLeaflet} onClick={onMapEmbeddingOptionSelect} defaultChecked={selectedOption === LeafletOption.reactLeaflet}/>
              <div>Map Embedding using react-leaflet</div>
            </label>
          </div>
          <div>
            <label style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <input type="radio" name="mapEmbeddingOption" value={LeafletOption.leaflet} onClick={onMapEmbeddingOptionSelect} />
              <div>Map Embedding using only leaflet</div>
            </label>
          </div>
      </div>
      <div>
        <table style={{
          backgroundColor: '#000'
        }}>
          <thead>
            <tr>
              <th rowSpan={2} style={{
                backgroundColor: '#FFF'
              }}>Location name</th>
              <th colSpan={2} style={{
                backgroundColor: '#FFF'
              }}>Gps Coordinate</th>
            </tr>
            <tr>
              <th style={{
                backgroundColor: '#FFF'
              }}>Latitude</th>
              <th style={{
                backgroundColor: '#FFF'
              }}>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {
              locations.map(loc => {
                return (
                  <tr key={loc.id}>
                    <td style={{
                        backgroundColor: '#FFF'
                      }}
                    >
                      <label>
                        <input type='checkbox' defaultChecked={loc.selected} />
                        {loc.name}
                      </label>
                    </td>
                    <td style={{
                        backgroundColor: '#FFF'
                      }}
                    >
                      {loc.gpsCoordinate.latitude}
                    </td>
                    <td style={{
                        backgroundColor: '#FFF'
                      }}
                    >
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
