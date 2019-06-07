import {
  ActionCreator,
  reducer
} from './user';

describe(`USER reducers`, () => {
  it(`Should return initial state by defalut`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationReauired: false
    });
  });

  it(`Should require authorization`, () => {
    expect(reducer(
        {
          isAuthorizationReauired: false
        },
        ActionCreator.requireAuthorization(true)
    )).toEqual({
      isAuthorizationReauired: true
    });
  });

  it(`Should reset require authorization`, () => {
    expect(reducer(
        {
          isAuthorizationReauired: true
        }, ActionCreator.requireAuthorization(false)
    )).toEqual({
      isAuthorizationReauired: false
    });
  });
});
