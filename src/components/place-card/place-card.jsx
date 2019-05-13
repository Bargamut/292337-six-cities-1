import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Компонент карточки объекта недвижимости
 * @param {Object} props
 * @return {JSX}
 */
const PlaceCard = ({place, onClickHeader, onClickImage}) => {
  const {
    type,
    img,
    mark,
    name: placeName,
    price,
    rating
  } = place;

  return (
    <article className="cities__place-card place-card">
      {mark ? (
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
      ) : ``}
      <div className="cities__image-wrapper place-card__image-wrapper" onClick={onClickImage}>
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price.currency}{price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark-active"></use>
            </svg>

            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name" onClick={onClickHeader}>
          <a href="#">{placeName}</a>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    img: PropTypes.string.isRequired,
    mark: PropTypes.oneOf([`Premium`]),
    name: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.oneOf([`€`]).isRequired
    }),
    rating: PropTypes.number.isRequired
  }).isRequired,
  onClickHeader: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired
};

export default PlaceCard;
