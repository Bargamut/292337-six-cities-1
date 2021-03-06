import * as React from 'react';

import {ReviewItem} from '../../types';

interface Props {
  item: ReviewItem
}

const ReviewItems = (props: Props) => {
  const {item} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={item.user.avatarUrl}
            width="54" height="54"
            alt="Reviews avatar"
          />
        </div>

        <span className="reviews__user-name">
          {item.user.name}
        </span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${item.rating * 20}%` }}></span>

            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">
          {item.comment}
        </p>

        <time className="reviews__time" dateTime={item.date}>
          {new Date(item.date).toLocaleDateString('en-US', { year: `numeric`, month: `long` })}
        </time>
      </div>
    </li>
  );
};

export default ReviewItems;
