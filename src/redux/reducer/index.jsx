import { SET_VISIBLE_TYPE, SET_AUTHENTICATE, SET_USER_ID, SET_ACCOUNT_SETTING, SET_FILTER_TYPE, SET_OPEN_SIGNUP } from "../constants/action-types";

const initialState = {
  visible_type: "",
  authenticate: false,
  userId: 0,
  accountSetting: 0,
  openSignUp: false,
  filterType: 'all',
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
  if (action.type === SET_OPEN_SIGNUP) {
    return {
      ...state,
      openSignUp: action.payload,
    }
  }
  if (action.type === SET_FILTER_TYPE) {
    return {
      ...state,
      filterType: action.payload,
    }
  }
  return state;
}

export default rootReducer;
