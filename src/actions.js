import request from 'superagent';

const feedMock = [
    {
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "9187.2711305", 
        "price_btc": "1.0", 
        "24h_volume_usd": "29923455716.1", 
        "market_cap_usd": "167208215141", 
        "available_supply": "18199987.0", 
        "total_supply": "18199987.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.21", 
        "percent_change_24h": "-1.12", 
        "percent_change_7d": "0.2", 
        "last_updated": "1580856698"
    }, 
    {
        "id": "ethereum", 
        "name": "Ethereum", 
        "symbol": "ETH", 
        "rank": "2", 
        "price_usd": "188.840912989", 
        "price_btc": "0.02055865", 
        "24h_volume_usd": "11715127031.1", 
        "market_cap_usd": "20690446975.0", 
        "available_supply": "109565489.0", 
        "total_supply": "109565489.0", 
        "max_supply": null, 
        "percent_change_1h": "0.26", 
        "percent_change_24h": "-0.57", 
        "percent_change_7d": "8.22", 
        "last_updated": "1580856686"
    }, 
    {
        "id": "xrp", 
        "name": "XRP", 
        "symbol": "XRP", 
        "rank": "3", 
        "price_usd": "0.264890949", 
        "price_btc": "0.00002884", 
        "24h_volume_usd": "2877646954.21", 
        "market_cap_usd": "11575264200.0", 
        "available_supply": "43698224662.0", 
        "total_supply": "99991093055.0", 
        "max_supply": "100000000000", 
        "percent_change_1h": "-0.49", 
        "percent_change_24h": "4.57", 
        "percent_change_7d": "11.98", 
        "last_updated": "1580856667"
    }, 
    {
        "id": "bitcoin-cash", 
        "name": "Bitcoin Cash", 
        "symbol": "BCH", 
        "rank": "4", 
        "price_usd": "380.1408983", 
        "price_btc": "0.04138501", 
        "24h_volume_usd": "3140133229.68", 
        "market_cap_usd": "6941672164.0", 
        "available_supply": "18260788.0", 
        "total_supply": "18260788.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.4", 
        "percent_change_24h": "-0.76", 
        "percent_change_7d": "1.62", 
        "last_updated": "1580856669"
    }, 
    {
        "id": "bitcoin-sv", 
        "name": "Bitcoin SV", 
        "symbol": "BSV", 
        "rank": "5", 
        "price_usd": "272.703925115", 
        "price_btc": "0.02968861", 
        "24h_volume_usd": "1871056205.24", 
        "market_cap_usd": "4979056103.0", 
        "available_supply": "18258102.0", 
        "total_supply": "18258102.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.81", 
        "percent_change_24h": "-2.5", 
        "percent_change_7d": "-6.21", 
        "last_updated": "1580856674"
    }, 
    {
        "id": "tether", 
        "name": "Tether", 
        "symbol": "USDT", 
        "rank": "6", 
        "price_usd": "1.0000642022", 
        "price_btc": "0.00010887", 
        "24h_volume_usd": "37066207035.9", 
        "market_cap_usd": "4642665464.0", 
        "available_supply": "4642367414.0", 
        "total_supply": "4776930644.0", 
        "max_supply": null, 
        "percent_change_1h": "-0.19", 
        "percent_change_24h": "0.01", 
        "percent_change_7d": "-0.11", 
        "last_updated": "1580856684"
    }, 
    {
        "id": "litecoin", 
        "name": "Litecoin", 
        "symbol": "LTC", 
        "rank": "7", 
        "price_usd": "67.869164707", 
        "price_btc": "0.00738875", 
        "24h_volume_usd": "4439980649.22", 
        "market_cap_usd": "4344318613.0", 
        "available_supply": "64010197.0", 
        "total_supply": "64010197.0", 
        "max_supply": "84000000.0", 
        "percent_change_1h": "-0.28", 
        "percent_change_24h": "-2.72", 
        "percent_change_7d": "13.58", 
        "last_updated": "1580856666"
    }, 
    {
        "id": "eos", 
        "name": "EOS", 
        "symbol": "EOS", 
        "rank": "8", 
        "price_usd": "4.2510247409", 
        "price_btc": "0.0004628", 
        "24h_volume_usd": "2792701974.14", 
        "market_cap_usd": "4045451980.0", 
        "available_supply": "951641599.0", 
        "total_supply": "1048341610.0", 
        "max_supply": null, 
        "percent_change_1h": "0.37", 
        "percent_change_24h": "1.06", 
        "percent_change_7d": "6.35", 
        "last_updated": "1580856669"
    }, 
    {
        "id": "binance-coin", 
        "name": "Binance Coin", 
        "symbol": "BNB", 
        "rank": "9", 
        "price_usd": "18.2015823361", 
        "price_btc": "0.00198156", 
        "24h_volume_usd": "224392694.992", 
        "market_cap_usd": "2831014288.0", 
        "available_supply": "155536713.0", 
        "total_supply": "187536713.0", 
        "max_supply": "187536713.0", 
        "percent_change_1h": "0.06", 
        "percent_change_24h": "-1.21", 
        "percent_change_7d": "1.85", 
        "last_updated": "1580856669"
    }, 
    {
        "id": "cardano", 
        "name": "Cardano", 
        "symbol": "ADA", 
        "rank": "10", 
        "price_usd": "0.0560410292", 
        "price_btc": "0.00000610", 
        "24h_volume_usd": "110824919.407", 
        "market_cap_usd": "1452979716.0", 
        "available_supply": "25927070538.0", 
        "total_supply": "31112483745.0", 
        "max_supply": "45000000000.0", 
        "percent_change_1h": "-0.04", 
        "percent_change_24h": "-1.83", 
        "percent_change_7d": "6.36", 
        "last_updated": "1580856669"
    }
];

export const setCurrency = (payload) => ({
    type: 'currency-selection',
    payload
});

export const activateGlobalProgress = {
    type: 'global-progress',
    payload: true
};

export const deactivateGlobalProgress = {
    type: 'global-progress',
    payload: false
};

export const setGlobalMsg = (payload) => ({
    type: 'global-message',
    payload
});

export const getAppFeed = (currency) => {
    return (dispatch, getState) => {
        const host = 'https://api.coinmarketcap.com';
        request.get(`${host}/v1/ticker/?limit=10&convert=${currency}`)
            .then(res => dispatch({ type: 'feed', payload: res.body })); 
    }
}
    
