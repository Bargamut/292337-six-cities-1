import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click`, () => {
  const clickHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        placeName={``}
        onClickHeader={clickHandler}
      />
  );

  const nodeHeader = placeCard.find(`h2.place-card__name`);

  expect(nodeHeader.length).toEqual(1);

  nodeHeader.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
