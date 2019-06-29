import * as React from 'react';

import withFavorite from '../../hocs/with-favorite/with-favorite';

interface Props {
  isFavorite: boolean
  onFavoriteClick: () => void
  iconWidth?: number
  iconHeight?: number
  className?: string
  caption?: string
}

const Bookmark = (props: Props) => {
  const {isFavorite, onFavoriteClick, iconWidth, iconHeight, className, caption} = props;

  const blockClassName = className || `place-card`;
  const activeClass = isFavorite ? `${blockClassName}__bookmark-button--active` : ``;

  return (
    <button className={`${blockClassName}__bookmark-button ${activeClass} button`} type="button" onClick={onFavoriteClick}>
      <svg className={`place-card__bookmark-icon`} width={iconWidth || 18} height={iconHeight || 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>

      <span className="visually-hidden">{caption || `In bookmarks`}</span>
    </button>
  );
};

export {Bookmark};
export default withFavorite(Bookmark);
