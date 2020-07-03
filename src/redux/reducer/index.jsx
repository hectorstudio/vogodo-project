import {
  SET_VISIBLE_TYPE,
  SET_AUTHENTICATE,
  SET_USER_ID,
  SET_ACCOUNT_SETTING,
  SET_FILTER_TYPE,
  SET_OPEN_SIGNUP,
  SET_SEARCH_CITY,
  SET_SEARCH_CITY_GEOINFO,
  SET_SEARCH_VAL,
  SET_MENU_TYPE,
  SET_USER_INFO,
} from "../constants/action-types";

const initialState = {
  visible_type: "",
  authenticate: false,
  userId: 0,
  accountSetting: 0,
  openSignUp: false,
  filterType: "all",
  searchCity: "",
  searchCityGeoInfo: {},
  searchVal: "",
  menuType: 0,
  userInfo: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_VISIBLE_TYPE) {
    return {
      ...state,
      visible_type: action.payload,
    };
  }
  if (action.type === SET_AUTHENTICATE) {
    return {
      ...state,
      authenticate: action.payload,
    };
  }
  if (action.type === SET_USER_ID) {
    return {
      ...state,
      userId: action.payload,
    };
  }
  if (action.type === SET_ACCOUNT_SETTING) {
    return {
      ...state,
      accountSetting: action.payload,
    };
  }
  if (action.type === SET_OPEN_SIGNUP) {
    return {
      ...state,
      openSignUp: action.payload,
    };
  }
  if (action.type === SET_FILTER_TYPE) {
    return {
      ...state,
      filterType: action.payload,
    };
  }
  if (action.type === SET_SEARCH_CITY) {
    return {
      ...state,
      searchCity: action.payload,
    };
  }
  if (action.type === SET_SEARCH_CITY_GEOINFO) {
    return {
      ...state,
      searchCityGeoInfo: action.payload,
    };
  }
  if (action.type === SET_SEARCH_VAL) {
    return {
      ...state,
      searchVal: action.payload,
    };
  }
  if (action.type === SET_MENU_TYPE) {
    return {
      ...state,
      menuType: action.payload,
    };
  }
  if (action.type === SET_USER_INFO) {
    return {
      ...state,
      userInfo: action.payload,
    };
  }
  return state;
}

export default rootReducer;
