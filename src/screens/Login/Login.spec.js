import React from 'react';
import Login from './Login';
import {render} from '@testing-library/react-native';

it('render', () => {
  const {baseElment} = render(<Login />);
  expect(baseElment).toMatchSnapshot();
});
