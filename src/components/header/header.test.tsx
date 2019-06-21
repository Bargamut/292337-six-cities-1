import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

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

    const header = renderer.create(
      <Router>
        <Header
          isAuthorizationRequired={true}
          user={{}}
          onClickSignIn={onClickSignIn}
        />
      </Router>
    ).toJSON();

    expect(header).toMatchSnapshot();
  });

  it(`SignIn correctly renders with authorization required`, () => {
    const {
      user,
      onClickSignIn
    } = mock;

    const header = renderer.create(
      <Router>
        <Header
          isAuthorizationRequired={false}
          user={user}
          onClickSignIn={onClickSignIn}
        />
      </Router>
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
