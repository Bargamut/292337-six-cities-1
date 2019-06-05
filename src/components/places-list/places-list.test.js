import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const mock = {
  citiesPlaces: [
    {
      city: `Amsterdam`,
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: `Amsterdam Apartment Premium`,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
    },
    {
      city: `Berlin`,
      type: `Private room`,
      img: ``,
      name: `Berlin Private room`,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
    },
    {
      city: `Sydney`,
      type: `Apartment`,
      img: ``,
      name: `Sydney Apartment`,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
    },
    {
      city: `Saint-Petersburg`,
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: `Saint-Petersburg Apartment Premium`,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
    },
    {
      city: `Amsterdam`,
      type: `Private room`,
      img: ``,
      mark: `Premium`,
      name: `Amsterdam Private room Premium`,
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
        city="Amsterdam"
        citiesPlaces={citiesPlaces}
        onActivateItem={jest.fn()}
        onDeactivateItem={jest.fn()}
      />
  );

  expect(placesList).toMatchSnapshot();
});
