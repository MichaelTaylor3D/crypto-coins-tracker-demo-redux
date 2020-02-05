import _ from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';

import AppBar from '../../lib/components/Appbar';

import CurrencySelector from '../../lib/components/CurrencySelector';

import ListingDrawer from './lib/ListingDrawer';
import Listing from './lib/Listing';

const CryptoTable = styled.table`
  width: 100%;
  margin-top: 4rem;
  border-collapse:collapse
`;

const CryptoTableHeader = styled.tr`
  background-color: #ebf0f4;
  border-top: 0.0625rem solid #e1e9ef;

  th {
    color: #b5b4c5;
    text-transform: uppercase;
    font-size: 0.5625rem;
    padding: 0.3125rem;
    text-align: left;
  }
`;

const TablePaddingCell = styled.th`
    width: 9.375rem;
`;

const Home = ({ 
    feed, 
    currencySelection, 
    setCurrencyAction,
    getAppFeedAction,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  const onClearSelectedListing = () => {
    setSelectedIndex(null);
    setSelectedListing(null);
  };

  const onSelectListing = (listing, index) => {
    setSelectedIndex(index);
    setSelectedListing(listing);
  };

  if (_.isEmpty(feed)) {
    return null;
  }

  return (
    <>
      <AppBar
        left={<span>VFCrypto </span>}
        right={(
            <CurrencySelector 
                currencySelection={currencySelection}
                setCurrencyAction={setCurrencyAction}
                getAppFeedAction={getAppFeedAction}
            />
        )}
      />
      <CryptoTable>
        <thead>
          <CryptoTableHeader>
            <TablePaddingCell />
            <th>Cryptocurrrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
            <TablePaddingCell />
          </CryptoTableHeader>
        </thead>
        <tbody>
          {feed.map((listing, index) => (
            <Listing
              key={`${listing.id}-${listing.symbol}`}
              listing={listing}
              selectListing={onSelectListing}
              index={index}
              currencySelection={currencySelection}
            />
          ))}
        </tbody>
      </CryptoTable>

      {selectedListing && (
        <ListingDrawer
          listing={selectedListing}
          index={selectedIndex}
          clearSelectedListing={onClearSelectedListing}
          currencySelection={currencySelection}
          setCurrencyAction={setCurrencyAction}
          getAppFeedAction={getAppFeedAction}
          feed={feed}
        />
      )}
    </>
  );
};

export default Home;
