import * as React from 'react';

interface Props {
  city: string,
  cities: string[],
  onChangeCity: (cityName: string) => void,
  onActivateItem: (cityName: string) => void
}

const CitiesList:React.FunctionComponent<Props> = ({city, cities, onChangeCity, onActivateItem}) => {
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

export default CitiesList;
