import request from 'superagent';

export const setCurrency = (payload) => ({
    type: 'CURRENCY_SELECTION',
    payload
});

export const activateGlobalProgress = {
    type: 'GLOBAL_PROGRESS',
    payload: true
};

export const deactivateGlobalProgress = {
    type: 'GLOBAL_PROGRESS',
    payload: false
};

export const setGlobalMsg = (payload) => ({
    type: 'GLOBAL_MESSAGE',
    payload
});

export const getAppFeed = (currency) => {
    return (dispatch, getState) => {
        const host = 'https://api.coinmarketcap.com';
        request.get(`${host}/v1/ticker/?limit=10&convert=${currency}`)
            .then(res => dispatch({ type: 'FEED', payload: res.body })); 
    }
}
    
