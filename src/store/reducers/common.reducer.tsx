import commonConstants from "../constants/common.constants";

type commonState = {
  display: boolean;
};

const commonState = (
  state: commonState = {
    display: true
  },
  action: any
): commonState => {
  switch (action.type) {
    case commonConstants.HELLO_TOGGLE:
      return {
        ...state,
        display: !state.display
      };
    default:
      return {
        ...state
      };
  }
};

export { commonState };
