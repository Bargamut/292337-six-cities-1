import * as React from 'react';
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from 'enzyme';

import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should to be NULL of activeItem`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeItem).toBeUndefined();

  wrapper.props().onSetActiveItem(7);
  expect(wrapper.props().activeItem).toEqual(7);
});
