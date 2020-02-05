import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icon from '../../../resources/circle.svg';

const ListingRow = styled.tr`
  height: 3.125rem;
  background-color: #ffffff;
  border-bottom: 0.0625rem solid #f7f8fa;
  cursor: pointer;

  &:hover {
    background-color: #c6d9ff;
  }
`;

const Positive24HourChangeIndicator = styled.div`
  color: #38c485;
  font-size: 0.625rem;
`;

const Negative24HourChangeIndicator = styled(Positive24HourChangeIndicator)`
  color: red;
`;

const AccentText = styled.span`
  color: #b4bbcf;
  margin-right: 0.625rem;
  font-size: 0.75rem;
  width: 0.3125rem;
`;

const Icon = styled.img`
  width: 4.1875rem;
  height: 3.0625rem;
`;

const ListingCell = styled.td`
  display: flex;
  align-items: center;
  padding: 0.3125rem;
`;

const Listing = ({ index, listing, selectListing, currencySelection }) => {
  const {
    name,
    price_usd: priceUSD,
    percent_change_24h: percentChange24h,
  } = listing;

  // when getting foreign  currencies, the object we need will differ slightly
  // here we are looking for the selected fiat currency
  const marketCap = listing[`market_cap_${currencySelection.toLowerCase()}`];

  console.log(listing, marketCap);

  const Change24IndicatorComponent = percentChange24h < 0
    ? Negative24HourChangeIndicator : Positive24HourChangeIndicator;

  return (
    <ListingRow
      role="presentation"
      onClick={() => selectListing(listing, index)}
    >
      <td />
      <ListingCell>
        <AccentText>{index + 1}</AccentText>
        <Icon src={icon} alt={name} />
        <span>{name}</span>
      </ListingCell>
      <td>
        <AccentText>$</AccentText>
        {Number(priceUSD).toLocaleString('en', { maximumFractionDigits: 2 })}
      </td>
      <td>
        <AccentText>$</AccentText>
        {Number(marketCap).toLocaleString('en', { maximumFractionDigits: 2 })}
      </td>
      <td>
        <Change24IndicatorComponent>
          {percentChange24h}
        </Change24IndicatorComponent>
      </td>
      <td />
    </ListingRow>
  );
};

Listing.propTypes = {
  index: PropTypes.number.isRequired,
  listing: PropTypes.object.isRequired,
  selectListing: PropTypes.func.isRequired,
};

export default Listing;
