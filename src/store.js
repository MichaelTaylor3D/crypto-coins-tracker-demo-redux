import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = (state = {
    globalProgress: false,
    globalMsg: '',
    feed: [],
    currencySelection: 'USD',
}) => {
    return createStore(rootReducer, state, applyMiddleware(thunk));
}

export default configureStore;
