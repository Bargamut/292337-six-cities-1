import * as React from 'react';

interface Props {
  renderScreen: () => React.ReactElement
}

const App:React.FunctionComponent<Props> = (props) => {
  const {renderScreen} = props;

  return (
    <div>
      {renderScreen()}
    </div>
  );
};

export default App;
