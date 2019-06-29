import * as React from 'react';
import * as renderer from 'react-test-renderer';
import axiosMock from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../../reducer/reducer';
import {MemoryRouter as Router} from 'react-router-dom';

import PlacesList from './places-list';

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosMock)));

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
      images: [`1.jpg`, `2.jpg`, `3.jpg`],
      bedrooms: 1,
      maxAdults: 2,
      goods: [ `Towels`, `Dishwasher`, `Breakfast` ],
      host: {
        id: 25,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: ``,
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
      images: [`1.jpg`, `2.jpg`, `3.jpg`],
      bedrooms: 1,
      maxAdults: 2,
      goods: [ `Towels`, `Dishwasher`, `Breakfast` ],
      host: {
        id: 25,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: ``,
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
      images: [`1.jpg`, `2.jpg`, `3.jpg`],
      bedrooms: 1,
      maxAdults: 2,
      goods: [ `Towels`, `Dishwasher`, `Breakfast` ],
      host: {
        id: 25,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: ``,
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
      images: [`1.jpg`, `2.jpg`, `3.jpg`],
      bedrooms: 1,
      maxAdults: 2,
      goods: [ `Towels`, `Dishwasher`, `Breakfast` ],
      host: {
        id: 25,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: ``,
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
      images: [`1.jpg`, `2.jpg`, `3.jpg`],
      bedrooms: 1,
      maxAdults: 2,
      goods: [ `Towels`, `Dishwasher`, `Breakfast` ],
      host: {
        id: 25,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: ``,
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
    <Provider store={store}>
      <Router>
        <PlacesList
          citiesPlaces={citiesPlaces}
          onClickImageItem={jest.fn()}
        />
      </Router>
    </Provider>
  );

  expect(placesList).toMatchSnapshot();
});
