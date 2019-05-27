import {reducer} from './reducer';
import mockOffers from '../mocks/offers.js';

it(`Should return initial state by defalut`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: `Amsterdam`,
    citiesPlaces: mockOffers
  });
});

it(`Should change city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    citiesPlaces: mockOffers
  }, {
    type: `CHANGE_CITY`,
    payload: `Berlin`
  })).toEqual({
    city: `Berlin`,
    citiesPlaces: mockOffers
  });
});

it(`Should get empty offers by city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    citiesPlaces: mockOffers
  }, {
    type: `CHANGE_OFFERS`,
    payload: []
  })).toEqual({
    city: `Amsterdam`,
    citiesPlaces: []
  });
});
