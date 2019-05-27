import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import CITIES_DATA from '../../mocks/cities';

class CitiesMap extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  _initMap() {
    const {city, placesCoords} = this.props;
    const cityCoords = CITIES_DATA[city];
    const mapSettings = {
      icon: {
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      },
      zoom: 12
    };
    const icon = leaflet.icon(mapSettings.icon);
    const map = leaflet.map(this._mapRef.current, {
      center: cityCoords,
      zoom: mapSettings.zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(cityCoords, mapSettings.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    placesCoords.forEach((coords) => {
      leaflet
        .marker(coords, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
      </section>
    );
  }

  componentDidMount() {
    try {
      this._initMap();
    } catch (evt) {
      // Crash map service
    }
  }
}

CitiesMap.propTypes = {
  city: PropTypes.string.isRequired,
  placesCoords: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
  ).isRequired
};

export default CitiesMap;
