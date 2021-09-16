import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';

export default function ServiceMap() {
  const [viewport, setViewport] = useState({
    width: 5000,
    height: 500,
    latitude: 47.658779,
    longitude: -117.426048,
    zoom: 11,
  });

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

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
      <button onClick={resetViewport}>Reset</button>
    </div>
  );
}
