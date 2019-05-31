import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this._activateCard = this._activateCard.bind(this);
    this._deactivateCard = this._deactivateCard.bind(this);

    this.state = {
      activeCard: null
    };
  }

  render() {
    const {city, citiesPlaces} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {citiesPlaces.map((place, i) => {
          return (place.city === city)
            ? (
              <PlaceCard
                key={`place-card-${i}`}
                place={place}
                onActivate={this._activateCard}
                onDeactivate={this._deactivateCard}
              />
            )
            : null;
        })}
      </div>
    );
  }

  /**
   * @description Обновить данные об активной карточке
   * @author Paul "Bargamut" Petrov
   * @date 2019-05-13
   * @param {Object} place Данные карточки
   * @memberof PlacesList
   */
  _activateCard(place) {
    this.setState({activeCard: place});
  }

  /**
   * @description Очистить данные о последней активной карточке
   * @author Paul "Bargamut" Petrov
   * @date 2019-05-13
   * @memberof PlacesList
   */
  _deactivateCard() {
    this.setState({activeCard: null});
  }
}

PlacesList.propTypes = {
  city: PropTypes.string.isRequired,
  citiesPlaces: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
        img: PropTypes.string.isRequired,
        mark: PropTypes.oneOf([``, `Premium`]),
        name: PropTypes.string.isRequired,
        price: PropTypes.shape({
          value: PropTypes.number.isRequired,
          currency: PropTypes.oneOf([`€`]).isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired
      })
  ).isRequired
};

export default PlacesList;
