import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { commonConstants } from "../reducers/common.reducer";
import { AnyAction } from 'redux';

const toggle = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: commonConstants.HELLO_TOGGLE })
  }
};

export const commonActions = {
  toggle
};