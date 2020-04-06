import React from 'react';
import {useDispatch} from 'react-redux';

import Navigator from './Navigator';

export default React.memo(props => {
  const dispatch = useDispatch();
  const singIn = (password, email) => {
    dispatch({type: 'AUTH_START'});
  };
  return <Navigator {...props} isSingIn={false} singIn={singIn} />;
});
