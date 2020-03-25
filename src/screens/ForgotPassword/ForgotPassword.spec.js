import React from 'react';
import ForgotPassword from './ForgotPassword';
import {render} from '@testing-library/react-native';

it('render', () => {
  const {baseElment} = render(<ForgotPassword />);
  expect(baseElment).toMatchSnapshot();
});
