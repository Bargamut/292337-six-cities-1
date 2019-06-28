import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Header from './header';

const mock = {
  user: {
    id: 1,
    email: `test@email.ru`,
    name: `Name Surname`,
    avatarUrl: `/4.jpg`,
    isPro: false
  }
};

describe(`SignIn renders`, () => {
  it(`SignIn correctly renders without authorization required`, () => {
    const header = renderer.create(
      <Router>
        <Header
          isLoggedIn={false}
          user={{}}
        />
      </Router>
    ).toJSON();

    expect(header).toMatchSnapshot();
  });

  it(`SignIn correctly renders with authorization required`, () => {
    const {user} = mock;

    const header = renderer.create(
      <Router>
        <Header
          isLoggedIn={true}
          user={user}
        />
      </Router>
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
