import React from 'react';
import {shallow} from 'enzyme';
import App from './App.jsx';

const app = shallow(<App/>);

it('Renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('Initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('Adds a new gift to `state` when clicking to `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1}]);
});