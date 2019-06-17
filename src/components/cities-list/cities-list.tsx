import * as React from 'react';

const CitiesList = ({city, cities, onChangeCity, onActivateItem}) => {
  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityName, i) => {
            return (
              <li className="locations__item" key={`location-${i}`}>
                <a
                  className={`locations__item-link tabs__item ${city === cityName ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();

                    onActivateItem(cityName);
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
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCity: PropTypes.func,
  onActivateItem: PropTypes.func
};

export default CitiesList;
