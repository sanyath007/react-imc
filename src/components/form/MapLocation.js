import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapLocation = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 14.962450, lng: 102.116068 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 14.962450, lng: 102.116068 }} />}
    </GoogleMap>
  );
}));

export default MapLocation;
