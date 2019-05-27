import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities, onChangeCity}) => {
  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityName, i) => {
            return (
              <li className="locations__item" key={`location-${i}`}>
                <a
                  className={`locations__item-link tabs__item ${i === 0 ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();

                    onChangeCity(cityName);
                  }}
                >
                  <span>{cityName}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCity: PropTypes.func
};

export default CitiesList;
