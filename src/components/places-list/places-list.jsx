import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  render() {
    const {city, citiesPlaces, onActivateItem, onDeactivateItem} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {citiesPlaces.map((place, i) => {
          return (place.city.name === city)
            ? (
              <PlaceCard
                key={`place-card-${i}`}
                place={place}
                onActivate={onActivateItem}
                onDeactivate={onDeactivateItem}
              />
            )
            : null;
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  city: PropTypes.string.isRequired,
  citiesPlaces: PropTypes.array.isRequired,
  onActivateItem: PropTypes.func,
  onDeactivateItem: PropTypes.func
};

export default PlacesList;
