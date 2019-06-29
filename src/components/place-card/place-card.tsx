import * as React from 'react';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

import Bookmark from '../bookmark/bookmark';

interface Props {
  place: Offer,
  current?: number,
  onClickImage?: (place: Offer) => void,
  classNames?: {
    [key: string]: string
  },
  previewWidth?: number,
  previewHeight?: number
};

const PlaceCard = (props: Props) => {
  const {
    place,
    current,
    onClickImage,
    classNames,
    previewWidth,
    previewHeight
  } = props;

  const {
    type,
    title,
    price,
    rating
  } = place;

  const cardClassNames = {
    main: classNames && classNames.main ? classNames.main : 'cities__place-card',
    imgWrapper: classNames && classNames.imgWrapper ? classNames.imgWrapper : `cities__image-wrapper`,
    cardInfo: classNames && classNames.cardInfo ? classNames.cardInfo : ``
  };

  if (current >= 0) {
    cardClassNames.main = `${cardClassNames.main} ${cardClassNames.main}--active`;
  }

  const handleClickImage = (evt) => {
    evt.preventDefault();

    onClickImage(place);
  };

  return (
    <article className={`${cardClassNames.main} place-card`}>
      {place.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : ``}

      <div className={`${cardClassNames.imgWrapper} place-card__image-wrapper`}>
        <a href="#" onClick={handleClickImage}>
          <img
						className="place-card__image"
            src={place.previewImage}
            width={previewWidth || 260}
            height={previewHeight || 200}
            alt="Place image"
          />
        </a>
      </div>

      <div className={`${cardClassNames.cardInfo} place-card__info`}>
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
