import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const citiesPlaces = [
  {
    type: `Apartment`,
    img: ``,
    mark: `Premium`,
    name: ``,
    price: {
      value: 0,
      currency: `€`
    },
    rating: 0
  },
  {
    type: `Private room`,
    img: ``,
    name: ``,
    price: {
      value: 0,
      currency: `€`
    },
    rating: 0
  },
  {
    type: `Apartment`,
    img: ``,
    name: ``,
    price: {
      value: 0,
      currency: `€`
    },
    rating: 0
  },
  {
    type: `Apartment`,
    img: ``,
    mark: `Premium`,
    name: ``,
    price: {
      value: 0,
      currency: `€`
    },
    rating: 0
  }
];

it(`App correctly renders after relaunch`, () => {
  const app = renderer.create(
      <App
        citiesPlaces={citiesPlaces}
        onClickCardHeader={jest.fn()}
        onClickCardImage={jest.fn()}
      />
  )
  .toJSON();

  expect(app).toMatchSnapshot();
});
