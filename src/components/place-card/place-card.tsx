import * as React from 'react';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

import Bookmark from '../bookmark/bookmark';

interface Props {
  place: Offer,
  current?: number,
  onClickImage: (place: Offer) => void,
  className?: string
};

const PlaceCard = (props: Props) => {
  const {
    place,
    current,
    onClickImage
  } = props;

  const {
    type,
    title,
    price,
    rating
  } = place;

  let className = props.className || 'cities__place-card';

  if (current >= 0) {
    className = `${className} ${className}--active`;
  }

  const handleClickImage = (evt) => {
    evt.preventDefault();

    onClickImage(place);
  };

  return (
    <article className={`${className} place-card`}>
      {place.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={handleClickImage}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <Bookmark id={place.id} isFavorite={place.isFavorite} />
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
