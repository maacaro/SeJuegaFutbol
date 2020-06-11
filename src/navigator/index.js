import React from 'react';
import {useSelector} from 'react-redux';

import Navigator from './Navigator';

export default React.memo(props => {
  const isSignIn = useSelector(state => state.user.isSignIn);

  return <Navigator {...props} isSignIn={isSignIn} />;
});
