import {reducer} from './reducer';

it(`Should return initial state by defalut`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: `Amsterdam`,
    citiesPlaces: []
  });
});

it(`Should change city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    citiesPlaces: []
  }, {
    type: `CHANGE_CITY`,
    payload: `Berlin`
  })).toEqual({
    city: `Berlin`,
    citiesPlaces: []
  });
});

it(`Should get empty offers by city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    citiesPlaces: []
  }, {
    type: `CHANGE_OFFERS`,
    payload: []
  })).toEqual({
    city: `Amsterdam`,
    citiesPlaces: []
  });
});
