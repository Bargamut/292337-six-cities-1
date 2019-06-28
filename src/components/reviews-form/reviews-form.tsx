import * as React from 'react';
import { connect } from 'react-redux';
import { configureAPI } from '../../api';
import { ActionCreator } from '../../reducer/data/data';

import { RATING_ITEMS, MIN_REVIEW_CHARS } from '../../commons-data';

import RatingStar from '../rating-star/rating-star';
import ErrorMessage from '../error-message/error-message';

type RatingForm = {
  rating: number,
  review: string
}

interface Props {
  id: number,
  key: number,
  form: RatingForm,
  errors?: any,
  isDisabled: boolean,
  onChange: (evt) => void,
  onSubmit: () => void,
  onError: (errors: object) => void,
  onSendForm: (id: number, review: RatingForm) => void
}

const ReviewsForm = (props: Props) => {
  const {id, form, errors, isDisabled, onChange, onSubmit, onSendForm} = props;

  const FormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit();
    onSendForm(id, form);
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onChange={onChange}
      onSubmit={FormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATING_ITEMS.map((item, i) => {
          return (
            <RatingStar
              key={`rating_item-${i}`}
              title={item.title}
              value={item.value}
              error={errors && errors.value}
            />
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_REVIEW_CHARS}
      ></textarea>

      {errors && errors.comment ? <ErrorMessage error={errors.comment} /> : null}

      <ErrorMessage error={errors && errors.error} />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_CHARS} characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSendForm: (id: number, review: RatingForm) => {
    configureAPI(dispatch)
      .post(`/comments/${id}`, review)
        .then((response) => {
          dispatch(ActionCreator.loadComments(response.data));
        })
        .catch((error) => {
          ownProps.onError(error.response.data);
        })
  }
});

export {ReviewsForm};
export default connect(null, mapDispatchToProps)(ReviewsForm);
