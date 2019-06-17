import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

/* eslint-disable camelcase */

const mock = {
  city: `Amsterdam`,
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
        name: `Berlin`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Private room`,
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
        name: `London`,
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
        name: `Saint-Petersburg`,
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      type: `Apartment`,
      preview_image: ``,
      is_premium: true,
      title: ``,
      price: 0,
      rating: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  ]
};

it(`App correctly renders after relaunch`, () => {
  const {city, citiesPlaces} = mock;

  const app = renderer.create(
      <App
        city={city}
        cities={[
          ...new Set(citiesPlaces.map((offer) => {
            return offer.city.name;
          }))
        ]}
        citiesPlaces={citiesPlaces}
        onChangeCity={jest.fn()}
        renderScreen={jest.fn()}
      />
  )
  .toJSON();

  expect(app).toMatchSnapshot();
});
