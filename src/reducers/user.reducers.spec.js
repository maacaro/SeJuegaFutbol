import user from './user.reducers';

describe('User Reducer', () => {
  it('set a new token at a at success restore of token', () => {
    const prevState = {
      isLoading: true,
      isSignIn: false,
      userToken: null,
    };
    const action = {type: 'SUCCESS_RESTORE_TOKEN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: true,
      isSignIn: true,
      userToken: 'foo',
    });
  });
  it('NOT set a new token at a failure attemp of restore the token', () => {
    const prevState = {
      isLoading: true,
      isSignIn: false,
      userToken: 'bar',
    };
    const action = {type: 'FAILURE_RESTORE_TOKEN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: true,
      isSignIn: false,
      userToken: 'bar',
    });
  });
  it('set the token at success sign in', () => {
    const prevState = {
      isLoading: true,
      isSignIn: false,
      userToken: null,
    };
    const action = {type: 'SUCCESS_SIGN_IN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: true,
      isSignIn: true,
      userToken: 'foo',
    });
  });
  it(' NOT set the token at falilure sign in', () => {
    const prevState = {
      isLoading: true,
      isSignIn: false,
      userToken: null,
    };
    const action = {type: 'FAILURE_SIGN_IN', token: 'foo'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: true,
      isSignIn: false,
      userToken: null,
    });
  });
  it('remove token at sign out', () => {
    const prevState = {
      isLoading: true,
      isSignIn: true,
      userToken: 'foo',
    };
    const action = {type: 'SUCCESS_SIGN_OUT', token: 'bar'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: true,
      isSignIn: false,
      userToken: null,
    });
  });
  it('set the isLoading to true when athutentication starts', () => {
    const prevState = {
      isLoading: false,
      isSignIn: true,
      userToken: 'foo',
    };
    const action = {type: 'AUTH_START', token: 'bar'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: true,
      isSignIn: true,
      userToken: 'foo',
    });
  });
  it('set the isLoading to false when athutentication ends', () => {
    const prevState = {
      isLoading: false,
      isSignIn: true,
      userToken: 'foo',
    };
    const action = {type: 'AUTH_ENDS', token: 'bar'};

    const nextState = user(prevState, action);

    expect(nextState).toEqual({
      isLoading: false,
      isSignIn: true,
      userToken: 'foo',
    });
  });
  it('return a default state', () => {
    const prevState = undefined;

    const nextState = user(prevState);

    expect(nextState).toEqual({
      isLoading: false,
      isSignIn: false,
      userToken: null,
    });
  });
});
