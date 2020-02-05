import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as Pages from './pages';

import IndeterminateProgressOverlay from './lib/components/IndeterminateProgressOverlay';
import GlobalMsg from './lib/components/GlobalMsg';

import * as actions from './actions';

const App = ({ 
  globalProgress,
  globalMsg,
  setGlobalMsgAction,
  feed,
  currencySelection,
  setCurrencyAction,
  getAppFeedAction,
}) => {
  useEffect(() => {
    getAppFeedAction("USD");
  }, []);

    return (
      <Router>
        <div className="App">
          {globalProgress && <IndeterminateProgressOverlay />}
          <GlobalMsg 
            globalMsg={globalMsg} 
            setGlobalMsg={setGlobalMsgAction}
          />
          <Route exact path="/" >
            <Pages.Home 
              feed={feed} 
              currencySelection={currencySelection} 
              setCurrencyAction={setCurrencyAction}
              getAppFeedAction={getAppFeedAction}
            />
          </Route>
          {/* future routes to go here */}
        </div>
      </Router>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps =  (dispatch) => ({
  setCurrencyAction: (payload) => dispatch(actions.setCurrency(payload)),
  activateGlobalProgressAction: () => dispatch(actions.activateGlobalProgress),
  deactivateGlobalProgressAction: () => dispatch(actions.deactivateGlobalProgress),
  setGlobalMsgAction: (payload) => dispatch(actions.setGlobalMsg(payload)),
  getAppFeedAction: (payload) => dispatch(actions.getAppFeed(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
