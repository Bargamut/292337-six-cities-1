import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

/* eslint-disable camelcase */

const mock = {
  citiesPlaces: [
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
      is_premium: true,
      title: `Amsterdam Apartment Premium`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    },
    {
      city: {
        name: `Berlin`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Private room`,
      preview_image: ``,
      title: `Berlin Private room`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    },
    {
      city: {
        name: `Sydney`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Apartment`,
      preview_image: ``,
      title: `Sydney Apartment`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    },
    {
      city: {
        name: `Saint-Petersburg`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Apartment`,
      preview_image: ``,
      is_premium: true,
      title: `Saint-Petersburg Apartment Premium`,
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
      title: `Amsterdam Private room Premium`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
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
