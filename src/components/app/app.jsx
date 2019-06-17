import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/header.jsx';
import SvgSprite from '../svg-sprite/svg-sprite.jsx';

const App = (props) => {
  const {renderScreen} = props;

  return (
    <div>
      <SvgSprite />

      <Header />

      {renderScreen()}
    </div>
  );
};

App.propTypes = {
  renderScreen: PropTypes.func.isRequired
};

export default App;
