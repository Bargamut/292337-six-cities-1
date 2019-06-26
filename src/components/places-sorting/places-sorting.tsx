import * as React from 'react';
import { SelectItem } from '../../types';

import Select from '../select/select';

interface Props {
  sortItems: SelectItem[],
  onChangeOffersFilter?: (item: SelectItem) => void
}

interface State {
  isOpened: boolean,
  item: SelectItem
}

class PlacesSorting extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpened: false,
      item: props.sortItems[0]
    };

    this._handleItemClick = this._handleItemClick.bind(this);
    this._toggleSelect = this._toggleSelect.bind(this);
  }

  private _toggleSelect(): void {
    this.setState({isOpened: !this.state.isOpened});
  }

  private _handleItemClick(targetItem: SelectItem): void {
    this.props.onChangeOffersFilter(targetItem);

    this.setState({
      isOpened: !this.state.isOpened,
      item: targetItem
    });
  }

  render() {
    const {sortItems} = this.props;
    const {item, isOpened} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={this._toggleSelect}>
          {item.caption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <Select
          items={sortItems}
          activeItem={item.caption}
          isOpened={isOpened}
          onClickSelectItem={this._handleItemClick}
        />
      </form>
    );
  }
};

export default PlacesSorting;
