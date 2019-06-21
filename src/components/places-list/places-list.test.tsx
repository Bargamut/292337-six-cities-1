import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';

import PlacesList from './places-list';

const mock = {
  citiesPlaces: [
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
      isPremium: true,
      isFavorite: false,
      title: `Amsterdam Apartment Premium`,
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
        name: `Berlin`,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 13
        }
      },
      type: `Private room`,
      previewImage: ``,
      isPremium: false,
      isFavorite: false,
      title: `Berlin Private room`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 13
      }
    },
    {
      id: 2,
      city: {
        name: `Sydney`,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 13
        }
      },
      type: `Apartment`,
      previewImage: ``,
      isPremium: false,
      isFavorite: false,
      title: `Sydney Apartment`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 13
      }
    },
    {
      id: 3,
      city: {
        name: `Saint-Petersburg`,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 13
        }
      },
      type: `Apartment`,
      previewImage: ``,
      isPremium: true,
      isFavorite: false,
      title: `Saint-Petersburg Apartment Premium`,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 13
      }
    },
    {
      id: 4,
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
      isPremium: true,
      isFavorite: false,
      title: `Amsterdam Private room Premium`,
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

it(`Places List correctly renders`, () => {
  const {citiesPlaces} = mock;

  const placesList = renderer.create(
    <Router>
      <PlacesList
        // city="Amsterdam"
        citiesPlaces={citiesPlaces}
        onClickImageItem={jest.fn()}
        onActivateItem={jest.fn()}
        onDeactivateItem={jest.fn()}
      />
    </Router>
  );

  expect(placesList).toMatchSnapshot();
});
