import React, { FC } from "react";
import "./App.css";

import { Dispatch, AnyAction, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { commonActions } from "./store/actions/common.actions";
import { IAppState } from "./store/reducers";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      toggle: () => commonActions.toggle()
    },
    dispatch
  );

const mapStateToProps = (state: IAppState): IAppState => {
  return {
    commonState: state.commonState
  };
};

const App: FC<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> = ({ toggle, commonState }) => {
  return (
    <div className="App">
      <button onClick={toggle}>Toggle Button</button>
      {commonState.display ? <div>true</div> : <div>false</div>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);