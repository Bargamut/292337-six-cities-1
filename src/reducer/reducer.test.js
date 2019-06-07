import {reducer} from './reducer';

it(`Should return initial state by defalut`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: `Amsterdam`,
    cities: [],
    citiesPlaces: []
  });
});

it(`Should change city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    cities: [],
    citiesPlaces: []
  }, {
    type: `CHANGE_CITY`,
    payload: `Berlin`
  })).toEqual({
    city: `Berlin`,
    cities: [],
    citiesPlaces: []
  });
});

it(`Should get empty offers by city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    cities: [],
    citiesPlaces: []
  }, {
    type: `CHANGE_OFFERS`,
    payload: []
  })).toEqual({
    city: `Amsterdam`,
    cities: [],
    citiesPlaces: []
  });
});
