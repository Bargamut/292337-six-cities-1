import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main/main.jsx';

const App = () => {
  return <MainPage />;
};

const init = () => {
  ReactDOM.render(
      <App />,
      document.querySelector(`#root`)
  );
};

init();
