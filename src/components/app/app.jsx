import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  const {renderScreen} = props;

  return (
    <div>
      {renderScreen()}
    </div>
  );
};

App.propTypes = {
  renderScreen: PropTypes.func.isRequired
};

export default App;
