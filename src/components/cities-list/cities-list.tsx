import * as React from 'react';
import { City } from '../../types';

interface Props {
  cityName: string,
  cities: string[],
  onChangeCity: (cityName: string) => void
}

const CitiesList = ({cityName, cities, onChangeCity}: Props) => {
  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((currentCityName, i) => {
            return (
              <li className="locations__item" key={`location-${i}`}>
                <a
                  className={`locations__item-link tabs__item ${cityName === currentCityName ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();

                    onChangeCity(currentCityName);
                  }}
                >
                  <span>{currentCityName}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
