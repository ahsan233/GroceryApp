import {ADDITION, SUBTRACTION} from './Actions';

const initialState = {
  counter: 1,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};
    case SUBTRACTION:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}
export default userReducer;