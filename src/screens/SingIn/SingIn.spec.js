import React from 'react';
import SingIn from './SingIn';
import {render} from '@testing-library/react-native';

it('render', () => {
  const {baseElment} = render(<SingIn />);
  expect(baseElment).toMatchSnapshot();
});
