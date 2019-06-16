import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.jsx';

it(`SignIn correctly renders after relaunch`, () => {

  const signIn = renderer.create(
      <SignIn
        onSubmitForm={jest.fn()}
        onChangeInput={jest.fn()}
      />
  )
  .toJSON();

  expect(signIn).toMatchSnapshot();
});
