import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const mock = {
  citiesPlaces: [
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
  ]
};

it(`Places List correctly renders`, () => {
  const {citiesPlaces} = mock;

  const placesList = renderer.create(
      <PlacesList
        citiesPlaces={citiesPlaces}
        onClickCardHeader={jest.fn()}
        onClickCardImage={jest.fn()}
      />
  );

  expect(placesList).toMatchSnapshot();
});
