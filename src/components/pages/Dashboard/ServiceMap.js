import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import purplePing from '../../../assets/purplePing.png';
import yellowPing from '../../../assets/yellowPing.png';
import bluePing from '../../../assets/bluePing.png';
import './styles.css';
// Map for dashboard:

// Must have a token setup in a .env.local file
// with the following format for map to render
// REACT_APP_MAPBOX_TOKEN = "Token string"
export default function ServiceMap(props) {
  const [viewport, setViewport] = useState({
    width: 5000,
    height: 500,
    latitude: 47.658779,
    longitude: -117.426048,
    zoom: 11,
  });

  // Logic for reset button
  const resetViewport = () => {
    setViewport({
      ...viewport,
      latitude: 47.658779,
      longitude: -117.426048,
      zoom: 11,
      transitionDuration: 500,
      transitionInterpolator: new FlyToInterpolator(),
    });
  };

  // Marker generator taking in data from props currently
  // Currently hardcoded needs conditional logic to display
  // different markers dynamically based on program type
  // .mapMarkerStylezoomedOut is for styling of zoomed out wide view of map clusters
  // .mapMarkerStyle is for zoomed in view styling of map services
  // if else if else - style={{background: dot.program === "Prevention" ? '#472D5B' : dot.program === "Shelter Support" ? '#FEC357' : '#006FBA'}}>
  const markers = React.useMemo(
    () =>
      props.data.map(dot => (
        <Marker
          key={dot.program}
          longitude={dot.longitude}
          latitude={dot.latitude}
        >
          {/* <img src={yellowPing} /> */}

          <div
            className="mapMarkerStylezoomedOut"
            style={{
              background:
                dot.program === 'Prevention'
                  ? '#472D5B'
                  : dot.program === 'Shelter Support'
                  ? '#FEC357'
                  : '#006FBA',
            }}
          ></div>
        </Marker>
      )),
    [props.data]
  );

  return (
    <div className="service-map">
      <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {markers}
      </ReactMapGL>
      <button onClick={resetViewport}>Reset</button>
    </div>
  );
}

// if (dot.program === "Prevention"){
//   dot.style.backgroundColor = '#472D5B'
// }
// if (dot.program === "Shelter Support"){
//   dot.style.backgroundColor = '#FEC357'
// }
// else {
//   dot.style.backgroundColor = '#006FBA'
// }
