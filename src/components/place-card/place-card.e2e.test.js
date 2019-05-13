import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  places: [
    {
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
    },
    {
      type: `Private room`,
      img: ``,
      name: ``,
      price: {
        value: 0,
        currency: `€`
      },
      rating: 0
    }
  ],
  clickHeaderHandler: jest.fn(),
  clickImageHandler: jest.fn(),
  onActivate: jest.fn(),
  onDeactivate: jest.fn()
};

it(`Click`, () => {
  const {
    places,
    clickHeaderHandler,
    clickImageHandler,
    onActivate,
    onDeactivate
  } = mock;

  const placeCard = shallow(
      <PlaceCard
        place={places[0]}
        onClickHeader={clickHeaderHandler}
        onClickImage={clickImageHandler}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
  );

  const nodeHeader = placeCard.find(`h2.place-card__name`);

  expect(nodeHeader.length).toEqual(1);

  nodeHeader.simulate(`click`);

  expect(clickHeaderHandler).toHaveBeenCalledTimes(1);
});

it(`Set card data to callback correctly`, () => {
  const {
    places,
    clickHeaderHandler,
    clickImageHandler,
    onActivate,
    onDeactivate
  } = mock;

  const placeCard = shallow(
      <PlaceCard
        place={places[0]}
        onClickHeader={clickHeaderHandler}
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
