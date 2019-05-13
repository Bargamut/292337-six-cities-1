import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mock = {
  places: [
    {
      type: `Apartment`,
      img: ``,
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
      mark: `Premium`,
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

it(`PlaceCard correctly renders after relaunch`, () => {
  const {
    places,
    clickHeaderHandler,
    clickImageHandler,
    onActivate,
    onDeactivate
  } = mock;

  const placeCard = renderer.create(
      <PlaceCard
        place={places[0]}
        onClickHeader={clickHeaderHandler}
        onClickImage={clickImageHandler}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});

it(`PlaceCard WITH MARK correctly renders after relaunch`, () => {
  const {
    places,
    clickHeaderHandler,
    clickImageHandler,
    onActivate,
    onDeactivate
  } = mock;

  const placeCard = renderer.create(
      <PlaceCard
        place={places[1]}
        onClickHeader={clickHeaderHandler}
        onClickImage={clickImageHandler}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});
