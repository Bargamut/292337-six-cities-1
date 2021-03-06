import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';
import {
  ActionType,
  ActionCreator,
  reducer,
  Operation
} from './data';

describe(`Data reducers`, () => {
  it(`Should return initial state by defalut`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Amsterdam`,
      citiesPlaces: [],
      comments: []
    });
  });

  it(`Should change city`, () => {
    expect(reducer(
        {
          city: `Amsterdam`,
          citiesPlaces: [],
          comments: []
        },
        ActionCreator.changeCity(`Berlin`)
    )).toEqual({
      city: `Berlin`,
      citiesPlaces: [],
      comments: []
    });
  });

  it(`Should make correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadOffers = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return loadOffers(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}]
        });
      });
  });
});
