import * as React from 'react';
import * as leaflet from 'leaflet';

import {Location} from '../../types';

const MAP_SETTINGS = {
  icon: {
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  },
  activeIcon: {
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  },
  zoom: 12
};

interface Props {
  location: Location,
  placesCoords: Location[],
  hasActivePoint?: boolean,
  className?: string
};

class CitiesMap extends React.PureComponent<Props> {
  private map: any;
  private _mapRef : React.RefObject<any>;

  constructor(props) {
    super(props);

    this.map = null;
    this._mapRef = React.createRef();
  }

  _initMap() {
    const {
      location: {latitude, longitude}
    } = this.props;

    this.map = leaflet.map(this._mapRef.current, {
      center: [latitude, longitude],
      zoom: MAP_SETTINGS.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView([latitude, longitude], MAP_SETTINGS.zoom);
  }

  _setPins() {
    const {
      placesCoords,
      location: {latitude, longitude}
    } = this.props;
    const icon = leaflet.icon(MAP_SETTINGS.icon);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    placesCoords.forEach((coords) => {
      leaflet
        .marker([coords.latitude, coords.longitude], {icon})
        .addTo(this.map);
    });

    if (this.props.hasActivePoint) {
      leaflet
        .marker([latitude, longitude], {icon: MAP_SETTINGS.activeIcon})
        .addTo(this.map);
    }
  }

  render() {
    const {className} = this.props;

    return (
      <section className={`${className ? className : `cities__map`} map`} id="map" ref={this._mapRef}></section>
    );
  }

  componentDidMount() {
    try {
      this._initMap();
      this._setPins();
    } catch (evt) {
      // Crash map service
    }
  }

  componentDidUpdate() {
    const {location: {
      latitude, longitude
    }} = this.props;

    this.map.setView([latitude, longitude], MAP_SETTINGS.zoom);

    this._setPins();
  }

  componentWillUnmount(): void {
    this.map.remove();
  }
}

export default CitiesMap;
