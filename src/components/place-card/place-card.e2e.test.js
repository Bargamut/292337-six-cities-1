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
  clickImageHandler: jest.fn()
};

it(`Click`, () => {
  const {
    places,
    clickHeaderHandler,
    clickImageHandler
  } = mock;

  const placeCard = shallow(
      <PlaceCard
        place={places[0]}
        onClickHeader={clickHeaderHandler}
        onClickImage={clickImageHandler}
      />
  );

  const nodeHeader = placeCard.find(`h2.place-card__name`);

  expect(nodeHeader.length).toEqual(1);

  nodeHeader.simulate(`click`);

  expect(clickHeaderHandler).toHaveBeenCalledTimes(1);
});
