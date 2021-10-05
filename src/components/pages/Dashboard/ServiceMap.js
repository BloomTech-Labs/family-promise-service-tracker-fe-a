import * as React from 'react';
import { useState, useRef } from 'react';
// import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';

// import purplePing from '../../../assets/purplePing.png';
// import yellowPing from '../../../assets/yellowPing.png';
// import bluePing from '../../../assets/bluePing.png';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers';
import './styles.css';
// Map for dashboard:

// Must have a token setup in a .env.local file
// with the following format for map to render
// REACT_APP_MAPBOX_TOKEN = "Token string"
export default function ServiceMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 47.658779,
    longitude: -117.426048,
    zoom: 11,
    bearing: 0,
    pitch: 0,
  });

  // Logic for reset button
  // const resetViewport = () => {
  //   setViewport({
  //     ...viewport,
  //     latitude: 47.658779,
  //     longitude: -117.426048,
  //     zoom: 11,
  //     transitionDuration: 500,
  //     transitionInterpolator: new FlyToInterpolator(),
  //   });
  // };

  const mapRef = useRef(null);

  // Marker generator taking in data from props currently
  // Currently hardcoded needs conditional logic to display different markers dynamically based on program type - DONE
  // if  else if  else - style={{background: dot.program === "Prevention" ? '#472D5B' : dot.program === "Shelter Support" ? '#FEC357' : '#006FBA'}}> - DONE
  // .mapMarkerStylezoomedOut is for styling of zoomed out wide view of map clusters - DONE
  // .mapMarkerStyle is for zoomed in view styling of map services - DONE

  // const markers = React.useMemo(
  //   () =>
  //     props.data.map(dot => (
  //       <Marker
  //         key={dot.program}
  //         longitude={dot.longitude}
  //         latitude={dot.latitude}
  //       >
  //         {/* <img src={yellowPing} /> */}

  //         <div
  //           className="mapMarkerStylezoomedOut"
  //           style={{
  //             background:
  //               dot.program === 'Prevention'
  //                 ? '#472D5B'
  //                 : dot.program === 'Shelter Support'
  //                 ? '#FEC357'
  //                 : '#006FBA',
  //           }}
  //         ></div>
  //       </Marker>
  //     )),
  //   [props.data]
  // );

  const onClick = event => {
    const feature = event.features[0];
    console.log('features', feature);
    // const clusterId = feature.properties.id;

    // const mapboxSource = mapRef.current.getMap().getSource('earthquakes');

    // mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
    //   if (err) {
    //     return;
    //   }

    //   setViewport({
    //     ...viewport,
    //     longitude: feature.geometry.coordinates[0],
    //     latitude: feature.geometry.coordinates[1],
    //     zoom,
    //     transitionDuration: 500
    //   });
    // });
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
          height="50vh"
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
            // data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
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

// if (dot.program === "Prevention"){
//   dot.style.backgroundColor = '#472D5B'
// }
// if (dot.program === "Shelter Support"){
//   dot.style.backgroundColor = '#FEC357'
// }
// else {
//   dot.style.backgroundColor = '#006FBA'
// }
