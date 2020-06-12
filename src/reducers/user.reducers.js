export default user;

const userDefaultState = {
  isSignIn: false,
  userToken: null,
  playerId: null,
};

function user(prevState = userDefaultState, action = {}) {
  switch (action.type) {
    case 'SUCCESS_RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isSignIn: true,
      };
    case 'FAILURE_RESTORE_TOKEN':
      return {
        ...prevState,
        isSignIn: false,
      };
    case 'SUCCESS_SIGN_IN':
      return {
        ...prevState,
        isSignIn: true,
        userToken: action.token,
        playerId: action.playerId,
      };
    case 'FAILURE_SIGN_IN':
      return {
        ...prevState,
        isSignIn: false,
        userToken: null,
        playerId: null,
      };
    case 'SUCCESS_SIGN_OUT':
      return {
        ...prevState,
        isSignIn: false,
        userToken: null,
        playerId: null,
      };
    default:
      return prevState;
  }
}
