import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card';

configure({
  adapter: new Adapter()
});

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
  ],
  clickImageHandler: jest.fn()
};

it(`Set card data to callback correctly`, () => {
  const {
    places,
    clickImageHandler
  } = mock;

  const placeCard = shallow(
      <PlaceCard
        place={places[0]}
        onClickImage={clickImageHandler}
      />
  );

  const nodeImgWrapper = placeCard.find(`.place-card__image-wrapper > a`);

  expect(nodeImgWrapper.length).toEqual(1);

  nodeImgWrapper.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(clickImageHandler).toHaveBeenCalledTimes(1);
  expect(clickImageHandler).toHaveBeenCalledWith(places[0]);
});
