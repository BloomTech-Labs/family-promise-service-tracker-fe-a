import * as React from 'react';
// import { useState, useRef } from 'react';
import ReactMapGL, {
  Marker,
  Source,
  Layer,
  Popup,
  NavigationControl,
} from 'react-map-gl';
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers';
import './styles.css';
import CITIES from './cities.json';
import blueping from '../../../assets/bluePing.png';
import CityInfo from './City-Info';

export default class ServiceMap extends React.Component {
  state = {
    viewport: {
      latitude: 47.658779,
      longitude: -117.426048,
      zoom: 11,
      bearing: 0,
      pitch: 0,
    },
    popupInfo: null,
  };

  mapRef = React.createRef(null);

  updateViewport = viewport => {
    this.setState({ viewport });
  };

  // send the info we gather to the popup info stuff
  // renderCityMarker is also setting the state of popupInfo to the entire city's data
  renderMarker = location => {
    return (
      <Marker
        key={location}
        longitude={location.longitude}
        latitude={location.latitude}
      >
        <img
          src={blueping}
          onClick={() => this.setState({ popupInfo: location })}
          alt="blue marker for location"
        />
      </Marker>
    );
  };

  // with the data from the state, we can now have our popup show our CityInfo component that handles
  // our layout for the popup
  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="bottom"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          // to make it easier on tablet users, we can click anywhere and it'll auto close the popup
          // otherwise we can set this to true to have it close only when we press the x
          // closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <div className="service-map">
        <>
          <ReactMapGL
            {...viewport}
            width="100vw"
            height="50vh"
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={this.updateViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            interactiveLayerIds={[clusterLayer.id]}
            ref={this.mapRef}
          >
            {/* we map through the dummy data so that we can render each using our marker function */}
            {CITIES.map(this.renderMarker)}
            {this.renderPopup()}
            <Source
              id="programClusters"
              type="geojson"
              data={this.props.data}
              cluster={true}
              clusterMaxZoom={14}
              clusterRadius={50}
            >
              <Layer {...clusterLayer} />
              <Layer {...clusterCountLayer} />
              <Layer {...unclusteredPointLayer} />
            </Source>
            <NavigationControl />
          </ReactMapGL>
        </>
      </div>
    );
  }
}
