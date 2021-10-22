import * as React from 'react';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
// import ReactMapGL, { Source, Layer } from 'react-map-gl';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { clusterLayer } from './layers';
import './styles.css';
import CITIES from './cities.json';
import CityInfo from './City-Info';
import CityPin from './city-pin';

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

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/service_type').then(response => {
      const allservices = response.data;
      setPost(allservices);

      console.log(allservices);
    });
  }, []);

  const [popupInfo, setPopupInfo] = useState(null);

  const mapRef = useRef(null);

  const updateViewport = viewport => {
    setViewport(viewport);
  };

  const renderMarker = (location, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={location.longitude}
        latitude={location.latitude}
      >
        {/* Changes the color of the marker through "property_name" and the dummy data from cities.json through the city-pin.js file | Will be updated once we get BE data*/}
        <CityPin
          size={20}
          name={location.property_name}
          onClick={() => setPopupInfo(location)}
        />
      </Marker>
    );
  };

  const renderPopUp = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={10}
          anchor="bottom"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
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
          onViewportChange={updateViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          interactiveLayerIds={[clusterLayer.id]}
          ref={mapRef}
        >
          {/* To make the marker, call the renderMarker function with two parameters, location and index */}
          {CITIES.map(renderMarker)}
          {/* If the location is exists, the popup is shown on the map */}
          {/* Next step is to reenable the React-Map-GL Markers and Clusters using geojson and props.data */}
          {/* Then we can disable the svg markers in place and reenable popups through the React-Map-GL markers and or clusters  */}
          {renderPopUp()}
          {/* <Source
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
          </Source> */}
        </ReactMapGL>
        {/* <button onClick={resetViewport}>Reset</button>  */}
      </>
    </div>
  );
}
