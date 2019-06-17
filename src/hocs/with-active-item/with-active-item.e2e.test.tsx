import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should to be NULL of activeItem`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeItem).toBeNull();
});

it(`Should contain a value of activeItem`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.props().onActivateItem(`value`);

  expect(wrapper.state().activeItem).toEqual(`value`);
});

it(`Should CLEAR state value of activeItem`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.setState({activeItem: `value`});
  wrapper.props().onDeactivateItem();

  expect(wrapper.state().activeItem).toBeNull();
});
