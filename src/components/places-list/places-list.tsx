import React, {PureComponent} from 'react';

import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  render() {
    const {citiesPlaces, onActivateItem, onDeactivateItem} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {citiesPlaces.map((place, i) => {
          return (
            <PlaceCard
              key={`place-card-${i}`}
              place={place}
              onActivate={onActivateItem}
              onDeactivate={onDeactivateItem}
            />
          );
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  citiesPlaces: PropTypes.array.isRequired,
  onActivateItem: PropTypes.func,
  onDeactivateItem: PropTypes.func
};

export default PlacesList;
