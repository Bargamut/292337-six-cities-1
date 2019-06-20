import * as React from 'react';
import {Offer} from '../../types';
import {Subtract} from 'utility-types';

type ActiveItem = Offer | string;

interface State {
  activeItem: ActiveItem
}

interface InjectedProps {
  activeItem: ActiveItem,
  onActivateItem: (item: ActiveItem) => void,
  onDeactivateItem: () => void
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>

  type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this._handleActivateItem = this._handleActivateItem.bind(this);
      this._handleDeactivateItem = this._handleDeactivateItem.bind(this);

      this.state = {
        activeItem: null
      };
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onActivateItem={this._handleActivateItem}
          onDeactivateItem={this._handleDeactivateItem}
        />
      );
    }

    /**
     * @description Обновить данные об активной карточке
     * @author Paul "Bargamut" Petrov
     * @date 2019-05-13
     * @param {Object} item Данные элемента
     * @memberof PlacesList
     */
    _handleActivateItem(item) {
      this.setState({activeItem: item});
    }

    /**
     * @description Очистить данные о последней активной карточке
     * @author Paul "Bargamut" Petrov
     * @date 2019-05-13
     * @memberof PlacesList
     */
    _handleDeactivateItem() {
      this.setState({activeItem: null});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
