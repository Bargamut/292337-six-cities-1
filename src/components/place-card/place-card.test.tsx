import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';

import PlaceCard from './place-card';

const mock = {
  places: [
    {
      id: 0,
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 13
        }
      },
      type: `Apartment`,
      previewImage: ``,
      isFavorite: false,
      isPremium: false,
      title: ``,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 13
      }
    },
    {
      id: 1,
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 13
        }
      },
      type: `Private room`,
      previewImage: ``,
      isFavorite: false,
      isPremium: true,
      title: `Amsterdam Apartment Premium`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 13
      }
    }
  ]
};

it(`PlaceCard correctly renders after relaunch`, () => {
  const {
    places
  } = mock;

  const placeCard = renderer.create(
    <Router>
      <PlaceCard
        place={places[0]}
        onClickImage={jest.fn()}
        onActivate={jest.fn()}
        onDeactivate={jest.fn()}
      />
    </Router>
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});

it(`PlaceCard WITH MARK correctly renders after relaunch`, () => {
  const {
    places
  } = mock;

  const placeCard = renderer.create(
    <Router>
      <PlaceCard
        place={places[1]}
        onClickImage={jest.fn()}
        onActivate={jest.fn()}
        onDeactivate={jest.fn()}
      />
    </Router>
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});
