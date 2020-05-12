import { SET_VISIBLE_TYPE } from "../constants/action-types";

const initialState = {
  visible_type: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_VISIBLE_TYPE) {
    return Object.assign({}, state, {
      visible_type: state.visible_type.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
