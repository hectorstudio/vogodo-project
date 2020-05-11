import { SET_VISIBLE_TYPE } from "../constants/action-types";

function setVisibleType(payload) {
  return { type: SET_VISIBLE_TYPE, payload };
}

export default setVisibleType;
