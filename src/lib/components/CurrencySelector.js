import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const CurrencySelector = ({
  currencySelection, 
  setCurrencyAction,
  getAppFeedAction
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, currency) => {
    setAnchorEl(null);
    setCurrencyAction(currency);
    getAppFeedAction(currency);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {currencySelection}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={event => handleClose(event, 'USD')}>USD</MenuItem>
        <MenuItem onClick={event => handleClose(event, 'JPY')}>JPY</MenuItem>
        <MenuItem onClick={event => handleClose(event, 'GBP')}>GBP</MenuItem>
        <MenuItem onClick={event => handleClose(event, 'EUR')}>EUR</MenuItem>
        <MenuItem onClick={event => handleClose(event, 'KRW')}>KRW</MenuItem>
      </Menu>
    </div>
  );
}

export default CurrencySelector;
