import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ReviewsList from './reviews-list';

const mocks = {
  comments: [{
    id: 1,
    user: {
      id: 2,
      isPro: false,
      name: ``,
      avatarUrl: `4.jpg`
    },
    rating: 2,
    comment: `The room was spacious and clean.`,
    date: `2019-06-20T16:39:57.287Z`
  }, {
    id: 2,
    user: {
      id: 3,
      isPro: false,
      name: ``,
      avatarUrl: `5.jpg`
    },
    rating: 5,
    comment: `The pool looked nothing like the photos.`,
    date: `2019-06-21T17:39:57.287Z`
  }]
};

it(`Reviews List correctly renders after relaunch`, () => {
  const {comments} = mocks;

  const reviewsList = renderer.create(
    <ReviewsList
      id={0}
      isLoggedIn={false}
      reviews={comments}
    />
  ).toJSON();

  expect(reviewsList).toMatchSnapshot();
});
