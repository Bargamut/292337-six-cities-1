import React from 'react';
import {configure, mount} from 'enzyme';
import Adatper from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

configure({adapter: new Adatper()});

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
    }
  ],
};

it(`SET Places List state active card correctly`, () => {
  const {
    places: citiesPlaces,
  } = mock;

  const placesList = mount(
      <PlacesList
        citiesPlaces={citiesPlaces}
      />
  );

  const nodeCard = placesList.find(`.place-card`);
  expect(nodeCard.length).toEqual(1);

  nodeCard.simulate(`mouseenter`);
  expect(placesList.state(`activeCard`)).toEqual(citiesPlaces[0]);
});

it(`CLEAR Places List state active card correctly`, () => {
  const {
    places: citiesPlaces,
  } = mock;

  const placesList = mount(
      <PlacesList
        citiesPlaces={citiesPlaces}
      />
  );

  placesList.setState({activeCard: citiesPlaces[0] });
  placesList.update();

  const nodeCard = placesList.find(`.place-card`);
  expect(nodeCard.length).toEqual(1);

  nodeCard.at(0).simulate(`mouseleave`);
  expect(placesList.state(`activeCard`)).toEqual(null);
});
