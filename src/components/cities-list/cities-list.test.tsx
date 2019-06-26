import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CitiesList from './cities-list';

const mock = {
  cities: [
    `Saint-Petersburg`,
    `Amsterdam`,
    `Berlin`,
    `London`,
    `Budapest`,
    `Tokyo`,
    `Sydney`
  ]
};

it(`Cities List correctly renders`, () => {
  const {cities} = mock;

  const citiesList = renderer.create(
      <CitiesList
        cityName="Amsterdam"
        cities={cities}
        onChangeCity={jest.fn()}
      />
  )
  .toJSON();

  expect(citiesList).toMatchSnapshot();
});
