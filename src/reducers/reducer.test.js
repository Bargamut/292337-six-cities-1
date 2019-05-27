import {reducer} from './reducer';
import mockOffers from '../mocks/offers.js';

it(`Should return initial state by defalut`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: `Amsterdam`,
    offers: mockOffers
  });
});

it(`Should change city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers: mockOffers
  }, {
    type: `CHANGE_CITY`,
    payload: `Berlin`
  })).toEqual({
    city: `Berlin`,
    offers: mockOffers
  });
});

it(`Should get empty offers by city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers: mockOffers
  }, {
    type: `GET_OFFERS`,
    payload: []
  })).toEqual({
    city: `Amsterdam`,
    offers: []
  });
});
