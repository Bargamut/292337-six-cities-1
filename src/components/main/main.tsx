import * as React from 'react';
import {Offer, Location} from '../../types';

import CITIES_DATA from '../../mocks/cities';

import PlacesList from '../places-list/places-list';
import CitiesMap from '../cities-map/cities-map';
import CitiesList from '../cities-list/cities-list';

import withActiveItem from '../../hocs/with-active-item/with-active-item';

interface Props {
  city: string,
  cities: string[],
  citiesPlaces: Offer[],
  onChangeCity: (cityName: string) => void
};

const PlacesListWrapped = withActiveItem(PlacesList);
const CitiesListWrapped = withActiveItem(CitiesList);

const MainPage:React.FunctionComponent<Props> = ({city, cities, citiesPlaces, onChangeCity}) => {
  const placesCoords: Location[] = citiesPlaces.map((offer) => offer.location);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <CitiesListWrapped
        city={city}
        cities={cities}
        onChangeCity={onChangeCity}
      />

      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>

            <b className="places__found">
              {citiesPlaces.length} {citiesPlaces.length === 1 ? `place` : `places`} to stay in {city}
            </b>

            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>

              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>

              {/* <!--
              <select className="places__sorting-type" id="places-sorting">
                <option className="places__option" value="popular" selected="">Popular</option>
                <option className="places__option" value="to-high">Price: low to high</option>
                <option className="places__option" value="to-low">Price: high to low</option>
                <option className="places__option" value="top-rated">Top rated first</option>
              </select>
              --> */}
            </form>

            <PlacesListWrapped
              citiesPlaces={citiesPlaces}
            />
          </section>

          <div className="cities__right-section">
            <CitiesMap
              location={CITIES_DATA[city]}
              hasActivePoint={false}
              placesCoords={placesCoords}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
