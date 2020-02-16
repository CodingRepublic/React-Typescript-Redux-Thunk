import React from "react";
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

class App extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.toggle}></button>
        {this.props.commonState.display ? <div>true</div> : <div>false</div>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
