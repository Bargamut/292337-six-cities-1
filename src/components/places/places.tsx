import * as React from 'react';

import CITIES_DATA from '../../mocks/cities';
import {SORTING_OPTIONS} from '../../commons-data';

import PlacesList from '../places-list/places-list';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesMap from '../cities-map/cities-map';

import { Offer, Location } from '../../types';

interface Props {
  citiesPlaces: Offer[],
  city: string,
  activeItem: Offer,
  onChangeOffersFilter: () => void,
  onSetActiveItem: () => void
}

const Places = (props: Props) => {
  const {city, citiesPlaces, activeItem, onChangeOffersFilter, onSetActiveItem} = props;
  const placesCoords: Location[] = citiesPlaces.map((offer) => offer.location);
  const hasActiveOffer: boolean = (activeItem && activeItem.location) ? true: false;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">
          {citiesPlaces.length} {citiesPlaces.length === 1 ? `place` : `places`} to stay in {city}
        </b>

        <PlacesSorting
          sortItems={SORTING_OPTIONS}
          onChangeOffersFilter={onChangeOffersFilter}
        />

        <PlacesList
          citiesPlaces={citiesPlaces}
          onClickImageItem={onSetActiveItem}
        />
      </section>

      <div className="cities__right-section">
        <CitiesMap
          location={hasActiveOffer ? activeItem.location : CITIES_DATA[city]}
          hasActivePoint={hasActiveOffer}
          placesCoords={placesCoords}
        />
      </div>
    </div>
  );
}

export default Places;
