export default (state, action) => {
    switch (action.type) {
        case 'global-progress':
            return Object.assign({}, state, {
                globalProgress: action.payload
            });
        case 'global-message':
            return Object.assign({}, state, {
                globalMessage: action.payload
            });
        case 'feed':
            return Object.assign({}, state, {
                feed: action.payload
            });
        case 'currency-selection':
            return Object.assign({}, state, {
                currencySelection: action.payload
            })
        default:
            return state;
    }
}