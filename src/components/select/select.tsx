import * as React from 'react';
import {SelectItem} from '../../types';

interface Props {
  items: SelectItem[],
  isOpened: boolean,
  activeItem: string,
  onClickSelectItem: (item: SelectItem) => void
}

const Select = (props: Props) => {
  const {
    items,
    isOpened,
    activeItem,
    onClickSelectItem
  }= props;

  return (
    <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}>
      {
        items.map(
          (item, index) => (
            <li
              key={`places__option-${index}`}
              className={`places__option ${activeItem === item.caption ? `places__option--active`: ``}`}
              tabIndex={index}
              onClick={() => onClickSelectItem(item)}
            >
              {item.caption}
            </li>
          )
        )
      }
    </ul>
  );
};

export default Select;
