import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ReviewsItem from './reviews-item';

const mocks = {
  comment: {
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
  }
};

it(`Property correctly renders after relaunch`, () => {
  const { comment } = mocks;

  const property = renderer.create(
    <ReviewsItem item={comment} />
  ).toJSON();

  expect(property).toMatchSnapshot();
});
