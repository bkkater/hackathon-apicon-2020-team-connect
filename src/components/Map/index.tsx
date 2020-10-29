import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapMarker from '../../../assets/map-marker.png'

import style from './styles';

const Map: React.FC = () => {
  return (
    <MapView
    provider={PROVIDER_GOOGLE}
    style={style.map}
    initialRegion={{
      latitude: -21.6157355,
      longitude: -55.1698906,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    }}
  >
    <Marker
      icon={mapMarker}
      calloutAnchor={{
        x: 2.7,
        y: 0.8,
      }}
      coordinate={{
        latitude: -21.6157355,
        longitude: -55.1698906,
      }}
    >
    </Marker>
  </MapView>
  );
}

export default Map;