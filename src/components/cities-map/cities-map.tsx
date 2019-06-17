import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import CITIES_DATA from '../../mocks/cities';

const MAP_SETTINGS = {
  icon: {
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  },
  zoom: 12
};

class CitiesMap extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this._mapRef = React.createRef();
  }

  _initMap() {
    const {city} = this.props;
    const cityCoords = CITIES_DATA[city];

    this.map = leaflet.map(this._mapRef.current, {
      center: cityCoords,
      zoom: MAP_SETTINGS.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCoords, MAP_SETTINGS.zoom);
  }

  _setPins() {
    const {placesCoords} = this.props;
    const icon = leaflet.icon(MAP_SETTINGS.icon);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    placesCoords.forEach((coords) => {
      leaflet
        .marker(coords, {icon})
        .addTo(this.map);
    });
  }

  render() {
    return (
      <section className="cities__map map" id="map" ref={this._mapRef}></section>
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
    const {city} = this.props;
    const cityCoords = CITIES_DATA[city];

    this.map.setView(cityCoords, MAP_SETTINGS.zoom);

    this._setPins();
  }
}

CitiesMap.propTypes = {
  city: PropTypes.string.isRequired,
  placesCoords: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
  ).isRequired
};

export default CitiesMap;
