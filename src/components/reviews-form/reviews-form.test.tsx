import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ReviewsForm} from './reviews-form';

it(`Reviews Form correctly renders after relaunch`, () => {
  const reviewsForm = renderer.create(
    <ReviewsForm
      id={0}
      key={0}
      form={{rating: 5, review: `Test review`}}
      isDisabled={true}
      onChange={jest.fn()}
      onSubmit={jest.fn()}
      onSendForm={jest.fn()}
      onError={jest.fn()}
    />
  ).toJSON();

  expect(reviewsForm).toMatchSnapshot();
});
