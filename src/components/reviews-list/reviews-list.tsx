import * as React from 'react';
import {ReviewItem} from '../../types';

import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

import withForm from '../../hocs/with-form/with-form';

const ReviewsFormWrapped = withForm(ReviewsForm);

interface Props {
  id: number
  reviews: ReviewItem[],
  isLoggedIn: boolean
}

const ReviewsList = (props: Props) => {
  const {id, reviews, isLoggedIn} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          {
            reviews && reviews.length
              ? reviews.length
              : 0
          }
        </span>
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <ReviewsItem
              key={`review-item-${review.id}`}
              item={review}
            />
          );
        })}
      </ul>

      {
        isLoggedIn
          ? <ReviewsFormWrapped id={id} />
          : null
      }
    </section>
  );
};

export default ReviewsList;
