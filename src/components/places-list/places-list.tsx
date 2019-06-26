import * as React from 'react';
import {Offer} from '../../types';

import PlaceCard from '../place-card/place-card';

interface Props {
  citiesPlaces: Offer[],
  onClickImageItem?: (place: Offer) => void
  className?: string
  current?: number,
};

class PlacesList extends React.PureComponent<Props> {
  render() {
    const {citiesPlaces, current, onClickImageItem} = this.props;

    const className = this.props.className || `cities__places-list`;

    return (
      <div className={`${className} places__list tabs__content`}>
        {citiesPlaces.map((place, i) => {
          return (
            <PlaceCard
              key={`place-card-${i}`}
              place={place}
              current={current === i ? current : null}
              onClickImage={onClickImageItem}
            />
          );
        })}
      </div>
    );
  }
}

export default PlacesList;
