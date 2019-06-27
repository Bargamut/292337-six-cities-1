import * as React from 'react';

import { RATING_ITEMS, MIN_REVIEW_CHARS } from '../../commons-data';
import RatingStar from '../rating-star/rating-star';

interface Props {
  onSubmitForm: () => void
}

const ReviewsForm = (props: Props) => {
  const {onSubmitForm} = props;

  const onSubmit = (evt) => {
    evt.preventDefault();

    onSubmitForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATING_ITEMS.map((item, i) => {
          return (
            <RatingStar
              key={`rating_item-${i}`}
              title={item.title}
              value={item.value}
            />
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_REVIEW_CHARS}
      ></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_CHARS} characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewsForm;
