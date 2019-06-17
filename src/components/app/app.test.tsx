import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

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
      previewImage: ``,
      isPremium: true,
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
      previewImage: ``,
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
      previewImage: ``,
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
      previewImage: ``,
      isPremium: true,
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
