import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

/* eslint-disable camelcase */

const mock = {
  places: [
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Apartment`,
      preview_image: ``,
      title: ``,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    },
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Private room`,
      preview_image: ``,
      is_premium: true,
      title: `Amsterdam Apartment Premium`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  ]
};

it(`PlaceCard correctly renders after relaunch`, () => {
  const {
    places
  } = mock;

  const placeCard = renderer.create(
      <PlaceCard
        place={places[0]}
        onClickImage={jest.fn()}
        onActivate={jest.fn()}
        onDeactivate={jest.fn()}
      />
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});

it(`PlaceCard WITH MARK correctly renders after relaunch`, () => {
  const {
    places
  } = mock;

  const placeCard = renderer.create(
      <PlaceCard
        place={places[1]}
        onClickImage={jest.fn()}
        onActivate={jest.fn()}
        onDeactivate={jest.fn()}
      />
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});
