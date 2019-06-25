import * as React from 'react';
import {Offer} from '../../types';

import PlaceCard from '../place-card/place-card';

interface Props {
  citiesPlaces: Offer[],
  onClickImageItem: (place: Offer) => void,
  onActivateItem: (place: Offer) => void,
  onDeactivateItem: () => void,
  className?: string
};

class PlacesList extends React.PureComponent<Props> {
  render() {
    const {citiesPlaces, onClickImageItem, onActivateItem, onDeactivateItem} = this.props;

    const className = this.props.className || `cities__places-list`;

    return (
      <div className={`${className} places__list tabs__content`}>
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
