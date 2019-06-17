import {
  ActionCreator,
  reducer
} from './user';

describe(`USER reducers`, () => {
  it(`Should return initial state by defalut`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: false,
      user: {}
    });
  });

  it(`Should require authorization`, () => {
    expect(reducer(
        {
          isAuthorizationRequired: false,
          user: {}
        },
        ActionCreator.requireAuthorization(true)
    )).toEqual({
      isAuthorizationRequired: true,
      user: {}
    });
  });

  it(`Should reset require authorization`, () => {
    expect(reducer(
        {
          isAuthorizationRequired: true,
          user: {}
        }, ActionCreator.requireAuthorization(false)
    )).toEqual({
      isAuthorizationRequired: false,
      user: {}
    });
  });
});
