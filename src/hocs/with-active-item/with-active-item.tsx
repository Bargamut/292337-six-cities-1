import * as React from 'react';
import {Subtract} from 'utility-types';

type itemType = object | number | string | undefined;

interface State {
  activeItem: itemType
}

interface InjectedProps {
  onSetActiveItem: (current: itemType) => void
}

function withActiveItem <T extends InjectedProps>(Component: React.ComponentType<T>) {
  return class WithActiveItem extends React.PureComponent<Subtract<T, InjectedProps>, State> {
    constructor(props) {
      super(props);
      this.state = {activeItem: undefined};
      this._setActiveItem = this._setActiveItem.bind(this);
    }

    private _setActiveItem(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <Component
          {...this.props as T}
          activeItem={this.state.activeItem}
          onSetActiveItem={this._setActiveItem} />
      );
    }
  };
}

export default withActiveItem;
