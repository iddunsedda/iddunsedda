import {} from '../constants';

const makeActionCreator = (actionType) => {
  return (payload) => {
    return {
      type: actionType,
      payload: payload
    }
  }
}
