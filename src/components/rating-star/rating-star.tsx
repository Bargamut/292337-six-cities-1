import * as React from 'react';

interface Props {
	title: string,
	value: number
}

const RatingStar = (props: Props) => {
  const {title, value} = props;

  return (
		<React.Fragment>
			<input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" />
			<label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
				<svg className="form__star-image" width="37" height="33">
					<use xlinkHref="#icon-star"></use>
				</svg>
			</label>
		</React.Fragment>
  );
};

export default RatingStar;
