import * as React from 'react';
import {Offer, City} from '../../types';

import CitiesList from '../cities-list/cities-list';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withSorting from '../../hocs/with-sorting/with-sorting';

interface Props {
  city: string,
  cities: string[],
  citiesPlaces: Offer[],
  onChangeCity: (cityName: string) => void
};

const MainPage = ({city, cities, citiesPlaces, onChangeCity}: Props) => {
  const isEmptyOffers = !(citiesPlaces && citiesPlaces.length)
  const PlacesWrapped = withSorting(withActiveItem(Places), citiesPlaces);

  const className = isEmptyOffers
    ? 'page__main page__main--index page__main--index-empty'
    : 'page page--gray page--main';

  return (
    <main className={className}>
      <h1 className="visually-hidden">Cities</h1>

      <CitiesList
        cityName={city}
        cities={cities}
        onChangeCity={onChangeCity}
      />

      <div className="cities__places-wrapper">
        {isEmptyOffers
          ? <PlacesEmpty cityName={city} />
          : (
            <PlacesWrapped
              city={city}
              citiesPlaces={citiesPlaces}
            />
          )
        }
      </div>
    </main>
  );
};

export default MainPage;
