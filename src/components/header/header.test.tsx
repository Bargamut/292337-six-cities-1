import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Header from './header';

const mock = {
  user: {
    id: 1,
    email: `test@email.ru`,
    name: `Name Surname`,
    avatarUrl: ``,
    isPro: false
  },
  onClickSignIn: jest.fn()
};

describe(`SignIn renders`, () => {
  it(`SignIn correctly renders without authorization required`, () => {
    const {
      onClickSignIn
    } = mock;

    const header = renderer.create(<Header
      isAuthorizationRequired={true}
      user={{}}
      onClickSignIn={onClickSignIn}
    />).toJSON();

    expect(header).toMatchSnapshot();
  });

  it(`SignIn correctly renders with authorization required`, () => {
    const {
      user,
      onClickSignIn
    } = mock;

    const header = renderer.create(<Header
      isAuthorizationRequired={false}
      user={user}
      onClickSignIn={onClickSignIn}
    />).toJSON();

    expect(header).toMatchSnapshot();
  });
});
