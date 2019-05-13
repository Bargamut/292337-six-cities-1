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
  onClickCardHeader: jest.fn(),
  onClickCardImage: jest.fn()
};

it(`SET Places List state active card correctly`, () => {
  const {
    places: citiesPlaces,
    onClickCardHeader,
    onClickCardImage
  } = mock;

  const placesList = mount(
      <PlacesList
        citiesPlaces={citiesPlaces}
        onClickCardHeader={onClickCardHeader}
        onClickCardImage={onClickCardImage}
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
    onClickCardHeader,
    onClickCardImage
  } = mock;

  const placesList = mount(
      <PlacesList
        citiesPlaces={citiesPlaces}
        onClickCardHeader={onClickCardHeader}
        onClickCardImage={onClickCardImage}
      />
  );

  placesList.setState({activeCard: citiesPlaces[0] });
  placesList.update();

  const nodeCard = placesList.find(`.place-card`);
  expect(nodeCard.length).toEqual(1);

  nodeCard.at(0).simulate(`mouseleave`);
  expect(placesList.state(`activeCard`)).toEqual(null);
});
