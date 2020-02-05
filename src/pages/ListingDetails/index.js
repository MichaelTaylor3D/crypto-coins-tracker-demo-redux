import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '../../lib/components/Appbar';

import CurrencySelector from '../../lib/components/CurrencySelector';

import CryptoLabel from './lib/CryptoLabel';
import BackArrow from '../../lib/components/BackArrow';

const AppDrawerContainer = styled.div`
  height: 100%;
  background-color: #162946;
`;

const ListingDetailsContainer = styled.div`
  margin-top: 4.375rem;
  padding: 0.625rem;
  display: flex;
  align-content: center;
  justify-content: space-between;
  height: 21.875rem;
`;

const ListingDetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 12.5rem;
`;

const DetailLabel = styled.div`
  text-transform: uppercase;
  color: #4e728e;
  font-size: 0.625rem;
  display: flex;
`;

const AccentText = styled.span`
  color: #4e728e;
  margin-right: 0.625rem;
  font-size: 0.875rem;
`;

const DetailData = styled.div`
  display: flex;
  color: white;
`;

const BTCLabel = styled.span`
  color: #38c485;
  font-size: 0.625rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 0.125rem;
`;

const Rank = styled.div`
  color: #4e96ea;
  background-color: #1e385a;
  padding: 1.25rem;
  width: 0.625rem;
  height: 0.625rem;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  font-weight: bold;

  & span {
    transform: translateY(-0.25rem);
  }
`;

const RankLabel = styled.span`
  height: 100%;
  width: 2.1875rem;
  display: flex;
  align-items: center;
  margin-right: 0.3125rem;
`;

const ListingDetails = ({
    index,
    listing,
    onGoBack,
    currencySelection,
    setCurrencyAction,
    getAppFeedAction,
    feed,
  }) => {
  const updatedListing = feed.find(item => item.id === listing.id);

  const {
    name,
    symbol,
    total_supply: totalSupply,
  } = updatedListing;

  // when getting foreign  currencies, the object we need will differ slightly
  // here we are looking for the selected fiat currency
  const marketCap = updatedListing[`market_cap_${currencySelection.toLowerCase()}`];
  const volume24h = updatedListing[`24h_volume_${currencySelection.toLowerCase()}`];

  return (
    <AppDrawerContainer>
      <AppBar
        useDrawer
        left={(
          <>
            <BackArrow
              alt="back"
              onClick={onGoBack}
              role="presentation"
              title="back"
            />
          </>
        )}
        middle={<CryptoLabel name={name} symbol={symbol} />}
        right={
            <CurrencySelector 
                currencySelection={currencySelection}  
                setCurrencyAction={setCurrencyAction} 
                getAppFeedAction={getAppFeedAction} 
            />
        }
      />
      <ListingDetailsContainer>
        <ListingDetailsColumn>
          <DetailLabel>
            <RankLabel>Rank</RankLabel>
            <Rank>
              <span>{index + 1}</span>
            </Rank>
          </DetailLabel>
        </ListingDetailsColumn>

        <ListingDetailsColumn>
          <div>
            <DetailLabel>
              Market Cap
            </DetailLabel>
            <DetailData>
              <AccentText>$</AccentText>
              {Number(marketCap).toLocaleString('en', { maximumFractionDigits: 0 })}
            </DetailData>
          </div>
          <div>
            <DetailLabel>
              Circulating Supply
            </DetailLabel>
            <DetailData>
              {Number(totalSupply).toLocaleString('en', { maximumFractionDigits: 0 })}
              <BTCLabel>{symbol}</BTCLabel>
            </DetailData>
          </div>
        </ListingDetailsColumn>

        <ListingDetailsColumn>
          <div>
            <DetailLabel>
              24h Volume
            </DetailLabel>
            <DetailData>
              <AccentText>$</AccentText>
              {Number(volume24h).toLocaleString('en', { maximumFractionDigits: 0 })}
            </DetailData>
          </div>
          <div>
            <DetailLabel>
              Total Supply
            </DetailLabel>
            <DetailData>
              {Number(totalSupply).toLocaleString('en', { maximumFractionDigits: 0 })}
              <BTCLabel>{symbol}</BTCLabel>
            </DetailData>
          </div>
        </ListingDetailsColumn>

        <ListingDetailsColumn />
      </ListingDetailsContainer>
    </AppDrawerContainer>
  );
};

ListingDetails.propTypes = {
  index: PropTypes.number.isRequired,
  listing: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
  currencySelection: PropTypes.string.isRequired,
  feed: PropTypes.object.isRequired
};

export default ListingDetails;
