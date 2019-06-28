import * as React from 'react';
import * as renderer from 'react-test-renderer';

import RatingStar from './rating-star';

it(`Rating Star correctly renders after relaunch`, () => {
  const ratingStar = renderer.create(
		<RatingStar
      title="Отлично!"
      value={5}
		/>
	).toJSON();

  expect(ratingStar).toMatchSnapshot();
});
