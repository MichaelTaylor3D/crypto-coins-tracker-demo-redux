import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import icon from '../../../resources/circle.svg';

const LabelWrapper = styled.div`
    width: calc(100% - 50px);
    display: flex;
`;

const NameWrapper = styled.div`
    margin-top: 0.5625rem;
`;

const SymbolWrapper = styled.div`
    font-size: 0.625rem;
`;

const Icon = styled.img`
    width: 3.75rem;
    margin-right: 0.625rem;
`;

const CryptoLabel = (props) => {
  const {
    name,
    symbol,
  } = props;

  return (
    <LabelWrapper>
      {icon && <Icon src={icon} alt={name} />}
      <NameWrapper>
        <div>
          {name}
        </div>
        <SymbolWrapper>
          {symbol}
        </SymbolWrapper>
      </NameWrapper>
    </LabelWrapper>
  );
};

CryptoLabel.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CryptoLabel;
