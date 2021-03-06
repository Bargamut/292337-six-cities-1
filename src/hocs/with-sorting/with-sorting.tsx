import * as React from 'react';
import {Subtract} from 'utility-types';
import {sortByOrder} from '../../helpers';

 interface State {
  list: any[],
  filter: string
}

 interface InjectedProps {
  items: object | string | number,
  onSetActiveItem: (current: number) => void
}

function withSorting <T extends InjectedProps>(Component: React.ComponentType<T>, items) {
  return class WithSorting extends React.PureComponent<Subtract<T, InjectedProps>, State> {
    constructor(props) {
      super(props);
      this.state = {
        filter: 'popular',
        list: [...items]
      };
      this._sortOffersByOrder = this._sortOffersByOrder.bind(this);
    }

     private _sortOffersByOrder({value, order}) {
      if (!order) {
        this.setState({list: [...items], filter: 'popular'});
      } else {
        this.setState({list: [...sortByOrder(this.state.list, value, order)], filter: order});
      }
    }

     render() {
      return (
        <Component
          {...this.props as T}
          citiesPlaces={this.state.list}
          onChangeOffersFilter={this._sortOffersByOrder} />
      );
    }
  };
}

 export default withSorting;
