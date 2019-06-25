import * as React from 'react';
import {ReviewItem} from '../../types';

import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

interface Props {
  comments: ReviewItem[]
}

const ReviewsList = (props: Props) => {
  const {comments} = props;

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

      <ReviewsForm />
    </section>
  );
};

export default ReviewsList;
