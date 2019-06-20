import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SignIn from './sign-in';

it(`SignIn correctly renders after relaunch`, () => {

  const signIn = renderer.create(
      <SignIn
        isSubmitDisabled={true}
        onFormSubmit={jest.fn()}
        onInputChange={jest.fn()}
      />
  )
  .toJSON();

  expect(signIn).toMatchSnapshot();
});
