import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ReviewsForm from './reviews-form';

it(`Reviews Form correctly renders after relaunch`, () => {
  const reviewsForm = renderer.create(<ReviewsForm />).toJSON();

  expect(reviewsForm).toMatchSnapshot();
});
