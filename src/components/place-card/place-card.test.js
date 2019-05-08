import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`PlaceCard correctly renders after relaunch`, () => {
  const placeCard = renderer.create(
      <PlaceCard
        placeName={`test place`}
      />
  )
  .toJSON();

  expect(placeCard).toMatchSnapshot();
});
