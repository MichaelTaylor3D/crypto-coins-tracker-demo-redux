import React, { useEffect, Suspense, lazy } from 'react';

import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import IndeterminateProgressOverlay from './lib/components/IndeterminateProgressOverlay';
import GlobalMsg from './lib/components/GlobalMsg';

import * as actions from './actions';

const Home = lazy(() => import('./pages/Home'))

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
        <>
          {globalProgress && <IndeterminateProgressOverlay />}
          <GlobalMsg 
            globalMsg={globalMsg} 
            setGlobalMsg={setGlobalMsgAction}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" >
              <Home 
                feed={feed} 
                currencySelection={currencySelection} 
                setCurrencyAction={setCurrencyAction}
                getAppFeedAction={getAppFeedAction}
              />
            </Route>
            {/* future routes to go here */}
          </Suspense>
        </>
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
export const AppComponent = App;