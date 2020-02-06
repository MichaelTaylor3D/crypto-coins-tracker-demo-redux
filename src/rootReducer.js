export default (state, action) => {
    switch (action.type) {
        case 'GLOBAL_PROGRESS':
            return Object.assign({}, state, {
                globalProgress: action.payload
            });
        case 'GLOBAL_MESSAGE':
            return Object.assign({}, state, {
                globalMessage: action.payload
            });
        case 'FEED':
            return Object.assign({}, state, {
                feed: action.payload
            });
        case 'CURRENCY_SELECTION':
            return Object.assign({}, state, {
                currencySelection: action.payload
            });
        default:
            return state;
    }
}