import React from 'react';
import PropTypes from 'prop-types';

import PlacesList from '../places-list/places-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item';

const PlacesListWrapped = withActiveItem(PlacesList);
const CitiesListWrapped = withActiveItem(CitiesList);

const MainPage = ({city, cities, citiesPlaces, onChangeCity}) => {
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
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>

              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
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
              city={city}
              placesCoords={
                citiesPlaces.reduce((placesCoords, currentPlace) => {
                  const coords = [
                    currentPlace.location.latitude,
                    currentPlace.location.longitude
                  ];

                  placesCoords.push(coords);

                  return placesCoords;
                }, [])
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  citiesPlaces: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeCity: PropTypes.func
};

export default MainPage;
