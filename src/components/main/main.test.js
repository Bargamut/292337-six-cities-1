import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main.jsx';

const mock = {
  places: [
    {
      type: `Apartment`,
      img: ``,
      mark: `Premium`,
      name: ``,
      price: {
        value: 0,
        currency: `€`,
      },
      rating: 0
    }
  ]
};

it(`MainPage correctly renders after relaunch`, () => {
  const {places} = mock;

  const mainPage = renderer.create(
      <MainPage
        citiesPlaces={places}
        onClickCardHeader={jest.fn()}
        onClickCardImage={jest.fn()}
      />
  ).toJSON();

  expect(mainPage).toMatchSnapshot();
});
