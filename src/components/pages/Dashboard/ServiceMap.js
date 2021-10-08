import * as React from 'react';
import { useState, useRef } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers';
import './styles.css';

export default function ServiceMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 47.658779,
    longitude: -117.426048,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    width: 5000,
    height: 500,
  });

  const mapRef = useRef(null);

  const onClick = event => {
    const feature = event.features[0];
    console.log('features', feature);
  };

  return (
    <div className="service-map">
      {/* <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {markers}
      </ReactMapGL>
      <button onClick={resetViewport}>Reset</button> */}
      <>
        <ReactMapGL
          {...viewport}
          width="100vw"
          height="70vh"
          mapStyle="mapbox://styles/mapbox/light-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          interactiveLayerIds={[clusterLayer.id]}
          onClick={onClick}
          ref={mapRef}
        >
          <Source
            id="programClusters"
            type="geojson"
            data={props.data}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        </ReactMapGL>
        {/* <button onClick={resetViewport}>Reset</button>  */}
      </>
    </div>
  );
}
