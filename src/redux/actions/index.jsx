import {
  SET_VISIBLE_TYPE,
  SET_AUTHENTICATE,
  SET_USER_ID,
  SET_USER_INFO,
  SET_ACCOUNT_SETTING,
  SET_FILTER_TYPE,
  SET_OPEN_SIGNUP,
  SET_SEARCH_CITY,
  SET_SEARCH_CITY_GEOINFO,
  SET_SEARCH_VAL,
  SET_MENU_TYPE,
} from "../constants/action-types";

export function setVisibleType(payload) {
  return { type: SET_VISIBLE_TYPE, payload };
}

export function setAuthenticate(payload) {
  return { type: SET_AUTHENTICATE, payload };
}

export function setUserId(payload) {
  return { type: SET_USER_ID, payload };
}

export function setAccountSetting(payload) {
  return { type: SET_ACCOUNT_SETTING, payload };
}

export function setOpenSignUp(payload) {
  return { type: SET_OPEN_SIGNUP, payload };
}

export function setFilterType(payload) {
  return { type: SET_FILTER_TYPE, payload };
}

export function setSearchCity(payload) {
  return { type: SET_SEARCH_CITY, payload };
}

export function setSearchCityGeoInfo(payload) {
  return { type: SET_SEARCH_CITY_GEOINFO, payload };
}

export function setSearchVal(payload) {
  return { type: SET_SEARCH_VAL, payload };
}

export function setMenuType(payload) {
  return { type: SET_MENU_TYPE, payload };
}

export function setUserInfo(payload) {
  return { type: SET_USER_INFO, payload };
}

export default {
  setVisibleType,
  setOpenSignUp,
  setAuthenticate,
  setUserId,
  setAccountSetting,
  setSearchCity,
  setSearchCityGeoInfo,
  setSearchVal,
  setMenuType,
  setUserInfo,
};
