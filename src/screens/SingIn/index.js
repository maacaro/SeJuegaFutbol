import React, {useState} from 'react';
import SingIn from './SingIn';
import {useDispatch} from 'react-redux';
import apiclient from '../../api-client';

export default React.memo(props => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoadinng] = useState(false);
  const dispatch = useDispatch();
  const signIn = (password, email) => {
    setIsLoadinng(true);
    apiclient('login', {body: {password, email}})
      .then(({token, playerId}) => {
        dispatch({type: 'SUCCESS_SIGN_IN', token, playerId});
        setIsLoadinng(false);
      })
      .catch(err => {
        dispatch({type: 'FAILURE_SIGN_IN'});
        setIsLoadinng(false);
        if (err.message && err.message === 'User Not Found') {
          setError('NOT_REGISTER');
        } else {
          if (err.auth !== undefined && err.auth === false) {
            setError('WRONG_PASSWORD_EMAIL_COMBINATION');
          }
          setError(err.message);
        }
      });
  };
  return (
    <SingIn isLoading={isLoading} onSignIn={signIn} error={error} {...props} />
  );
});
