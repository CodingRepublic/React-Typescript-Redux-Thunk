import { Dispatch } from "redux";

import commonConstants from "../constants/common.constants";

const toggle = (): any => {
  const success = () => {
    return { type: commonConstants.HELLO_TOGGLE };
  };

  return async (dispatch: Dispatch) => {
    dispatch(success());
  };
};

export const commonActions = {
  toggle
};
