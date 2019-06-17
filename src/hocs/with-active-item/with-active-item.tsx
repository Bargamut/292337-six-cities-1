import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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
