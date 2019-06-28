import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ErrorMessage from './error-message';

it(`Error Mesage renders correctly`, () => {
  const errorMessage = renderer.create(<ErrorMessage error="Ошибка!" />);

  expect(errorMessage).toMatchSnapshot();
});
