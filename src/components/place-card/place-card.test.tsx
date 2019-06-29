import * as React from 'react';
import * as renderer from 'react-test-renderer';
import axiosMock from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../../reducer/reducer';
import {MemoryRouter as Router} from 'react-router-dom';

import PlaceCard from './place-card';

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosMock)));

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
    <Provider store={store}>
      <Router>
        <PlaceCard
          place={places[0]}
          onClickImage={jest.fn()}
        />
      </Router>
    </Provider>
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});

it(`PlaceCard WITH MARK correctly renders after relaunch`, () => {
  const {
    places
  } = mock;

  const placeCard = renderer.create(
    <Provider store={store}>
      <Router>
        <PlaceCard
          place={places[1]}
          onClickImage={jest.fn()}
        />
      </Router>
    </Provider>
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});
