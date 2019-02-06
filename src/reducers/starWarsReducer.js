import { GETTING_DATA, SUCCESS, ERROR } from '../actions';

// define a few properties here.
// Array chars, Boolean fetching, 
// Boolean fetched, null error.

const initialState = {
  getting_data: false,
  error: '',
  chars: []
};

// Fill me in with the important reducers
// action types should be FETCHING, FETCHED, and ERROR
// your switch statement should handle all of these cases.
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_DATA:
      return Object.assign({}, state, {getting_data: true});
    case SUCCESS:
      return Object.assign({}, state, {getting_data: false, chars: state.chars.concat(action.chars)});
    case ERROR:
      return Object.assign({}, state, {getting_data: false, error: action.error});
    default:
      return state;
  }
};
