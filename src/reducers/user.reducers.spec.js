import user from './user.reducers';

describe('User Reducer', () => {
  it('set a new token at a at success restore of token', () => {
    const prevState = {
      isSignIn: false,
      userToken: null,
      playerId: 'bar',
    };
    const action = {type: 'SUCCESS_RESTORE_TOKEN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isSignIn: true,
      userToken: 'foo',
      playerId: 'bar',
    });
  });
  it('NOT set a new token at a failure attemp of restore the token', () => {
    const prevState = {
      isSignIn: false,
      userToken: 'bar',
      playerId: 1,
    };
    const action = {type: 'FAILURE_RESTORE_TOKEN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isSignIn: false,
      userToken: 'bar',
      playerId: 1,
    });
  });
  it('set the token at success sign in', () => {
    const prevState = {
      isSignIn: false,
      userToken: null,
      playerId: null,
    };
    const action = {type: 'SUCCESS_SIGN_IN', token: 'foo', playerId: 11};

    const nextState = user(prevState, action);

    expect(nextState.userToken).toEqual('foo');
  });
  it(' NOT set the token at falilure sign in', () => {
    const prevState = {
      isSignIn: false,
      userToken: null,
      playerId: null,
    };
    const action = {type: 'FAILURE_SIGN_IN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState.userToken).toEqual(null);
  });
  it('set the playerId at success sign in', () => {
    const prevState = {
      isSignIn: false,
      userToken: null,
      playerId: null,
    };
    const action = {type: 'SUCCESS_SIGN_IN', token: 'foo', playerId: 11};

    const nextState = user(prevState, action);

    expect(nextState.playerId).toEqual(11);
  });
  it(' NOT set the playerId at falilure sign in', () => {
    const prevState = {
      isSignIn: false,
      userToken: null,
      playerId: null,
    };
    const action = {type: 'FAILURE_SIGN_IN', token: 'foo', playerId: 11};

    const nextState = user(prevState, action);

    expect(nextState.playerId).toEqual(null);
  });
  it('remove token at sign out', () => {
    const prevState = {
      isSignIn: true,
      userToken: 'foo',
      playerId: null,
    };
    const action = {type: 'SUCCESS_SIGN_OUT', token: 'bar'};

    const nextState = user(prevState, action);

    expect(nextState.userToken).toEqual(null);
  });
  it('remove playerId at sign out', () => {
    const prevState = {
      isSignIn: true,
      userToken: 'foo',
      playerId: 11,
    };
    const action = {type: 'SUCCESS_SIGN_OUT', token: 'bar'};

    const nextState = user(prevState, action);

    expect(nextState.playerId).toEqual(null);
  });
  it('return a default state', () => {
    const prevState = undefined;

    const nextState = user(prevState);

    expect(nextState).toEqual({
      isSignIn: false,
      userToken: null,
      playerId: null,
    });
  });
});
