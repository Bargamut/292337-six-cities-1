import * as React from 'react';
import {Offer} from '../../types';

import PlaceCard from '../place-card/place-card';

interface Props {
  citiesPlaces: Offer[],
  onClickImageItem: (place: Offer) => void,
  onActivateItem: (place: Offer) => void,
  onDeactivateItem: () => void
};

class PlacesList extends React.PureComponent<Props> {
  render() {
    const {citiesPlaces, onClickImageItem, onActivateItem, onDeactivateItem} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {citiesPlaces.map((place, i) => {
          return (
            <PlaceCard
              key={`place-card-${i}`}
              place={place}
              onClickImage={onClickImageItem}
              onActivate={onActivateItem}
              onDeactivate={onDeactivateItem}
            />
          );
        })}
      </div>
    );
  }
}

export default PlacesList;
