import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';

import MainPage from './main';

const mock = {
  city: `Amsterdam`,
  cities: [`Berlin`, `Amsterdam`],
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
      isPremium: true,
      isFavorite: false,
      title: ``,
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

it(`MainPage correctly renders after relaunch`, () => {
  const {city, cities, places} = mock;

  const mainPage = renderer.create(
    <Router>
      <MainPage
        city={city}
        cities={cities}
        citiesPlaces={places}
        onChangeCity={jest.fn()}
      />
    </Router>
  ).toJSON();

  expect(mainPage).toMatchSnapshot();
});
