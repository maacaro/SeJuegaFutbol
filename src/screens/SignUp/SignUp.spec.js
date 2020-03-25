import React from 'react';
import SignUp from './SignUp';
import {render} from '@testing-library/react-native';

it('render', () => {
  const {baseElment} = render(<SignUp />);
  expect(baseElment).toMatchSnapshot();
});
