import { SET_VISIBLE_TYPE, SET_AUTHENTICATE, SET_USER_ID, SET_ACCOUNT_SETTING } from "../constants/action-types";

const initialState = {
  visible_type: "",
  authenticate: false,
  userId: 0,
  accountSetting: 0,
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_VISIBLE_TYPE) {
    return {
      ...state,
      visible_type: action.payload,
    }
  }
  if (action.type === SET_AUTHENTICATE) {
    return {
      ...state,
      authenticate: action.payload,
    }
  }
  if (action.type === SET_USER_ID) {
    return {
      ...state,
      userId: action.payload,
    }
  }
  if (action.type === SET_ACCOUNT_SETTING) {
    return {
      ...state,
      accountSetting: action.payload,
    }
  }
  return state;
}

export default rootReducer;
