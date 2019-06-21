import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Property} from './property';

const mocks = {
  offer: {
    city: {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    previewImage: `7.jpg`,
    images: [`1.jpg`, `2.jpg`, `3.jpg`],
    title: `Beautiful & luxurious apartment at great location`,
    isFavorite: false,
    isPremium: true,
    rating: 2.7,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 231,
    goods: [ `Towels`, `Dishwasher`, `Breakfast` ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: ``,
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    id: 1
  }
};

it(`Property correctly renders after relaunch`, () => {
  const {offer} = mocks;

  const property = renderer.create(<Property offer={offer} />).toJSON();

  expect(property).toMatchSnapshot();
});
