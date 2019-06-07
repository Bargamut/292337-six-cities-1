import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

/* eslint-disable camelcase */

Enzyme.configure({
  adapter: new Adapter()
});

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
  ],
  clickImageHandler: jest.fn(),
  onActivate: jest.fn(),
  onDeactivate: jest.fn()
};

it(`Set card data to callback correctly`, () => {
  const {
    places,
    clickImageHandler,
    onActivate,
    onDeactivate
  } = mock;

  const placeCard = shallow(
      <PlaceCard
        place={places[0]}
        onClickImage={clickImageHandler}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
  );

  const nodeImgWrapper = placeCard.find(`.place-card__image-wrapper`);

  expect(nodeImgWrapper.length).toEqual(1);

  nodeImgWrapper.simulate(`click`);

  expect(clickImageHandler).toHaveBeenCalledTimes(1);
  expect(clickImageHandler).toHaveBeenCalledWith(places[0]);
});
