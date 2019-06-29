import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Footer from './footer';

it(`Footer renders correctly`, () => {
  const footer = renderer.create(
    <Router>
      <Footer />
    </Router>
  );

  expect(footer).toMatchSnapshot();
});
