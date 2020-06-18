import { SET_VISIBLE_TYPE, SET_AUTHENTICATE, SET_USER_ID, SET_ACCOUNT_SETTING, SET_OPEN_SIGNUP } from "../constants/action-types";

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

export default {
  setVisibleType,
  setOpenSignUp,
  setAuthenticate,
  setUserId,
  setAccountSetting
};
