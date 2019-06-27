import * as React from 'react';
import {ReviewItem} from '../../types';

import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

import withForm from '../../hocs/with-form/with-form';

const ReviewsFormWrapped = withForm(ReviewsForm);

interface Props {
  id: number
  comments: ReviewItem[]
}

const ReviewsList = (props: Props) => {
  const {id, comments} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          {
            comments && comments.length
              ? comments.length
              : 0
          }
        </span>
      </h2>

      <ul className="reviews__list">
        {comments.map((comment) => {
          return (
            <ReviewsItem
              key={`review-item-${comment.id}`}
              item={comment}
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
