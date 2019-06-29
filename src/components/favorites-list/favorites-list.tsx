import * as React from 'react';
import history from '../../history';

import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types';

const CLASS_NAMES = {
  main: `favorites__card`,
  imgWrapper: `favorites__image-wrapper`,
  cardInfo: `favorites__card-info`
};

interface Props {
  items: {
    [key: string] : Offer[]
  }
}

const FavoritesList:React.FunctionComponent<Props> = (props) => {
  const {items} = props;

  const linkTo = (item: Offer) => { history.push(`/offer/${item.id}`);};

  return (
    <ul className="favorites__list">
      {Object.entries(items).map(([cityName, places], i) => {
        return (
          <li key={`favorite-location-${i}`} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{cityName}</span>
                </a>
              </div>
            </div>

            <div className="favorites__places">
              {
                places ? places.map((place, n) => {
                  return (
                    <PlaceCard
                      key={`favorite-place-${n}`}
                      place={place}
                      classNames={CLASS_NAMES}
                      onClickImage={linkTo}
                      previewWidth={150}
                      previewHeight={110}
                    />
                  );
                }) : null
              }
            </div>
          </li>
          );
        })
      }
    </ul>
  );
};

export default FavoritesList;
