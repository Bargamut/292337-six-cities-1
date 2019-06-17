import {
  ActionCreator,
  reducer
} from './user';

describe(`USER reducers`, () => {
  it(`Should return initial state by defalut`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: false
    });
  });

  it(`Should require authorization`, () => {
    expect(reducer(
        {
          isAuthorizationRequired: false
        },
        ActionCreator.requireAuthorization(true)
    )).toEqual({
      isAuthorizationRequired: true
    });
  });

  it(`Should reset require authorization`, () => {
    expect(reducer(
        {
          isAuthorizationRequired: true
        }, ActionCreator.requireAuthorization(false)
    )).toEqual({
      isAuthorizationRequired: false
    });
  });
});
