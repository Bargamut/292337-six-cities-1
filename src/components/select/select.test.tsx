import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {SORTING_OPTIONS} from '../../commons-data';

import Select from './select';

it(`Select for sorting correctly renders`, () => {
  const select = renderer.create(
    <Select
      items={SORTING_OPTIONS}
      isOpened={true}
      activeItem="Price: high to low"
      onClickSelectItem={jest.fn()}
    />
  ).toJSON();

  expect(select).toMatchSnapshot();
});
