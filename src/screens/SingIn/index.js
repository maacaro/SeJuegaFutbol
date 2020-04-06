import React from 'react';
import SingIn from './SingIn';
import {useSelector} from 'react-redux';

export default React.memo(props => {
  const isLoading = useSelector(state => state.user.isLoading);
  return <SingIn {...props} isLoading={isLoading} />;
});
