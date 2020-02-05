import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';


import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListingDetails from '../../ListingDetails';

const ListingDrawer = ({
  clearSelectedListing,
  listing,
  index,
  currencySelection,
  setCurrencyAction,
  getAppFeedAction,
  feed,
}) => {
  const shouldOpen = Boolean(listing);
  const drawerStyle = {
    // use a smaller drawer for larger screens
    // calculate this dynamically
    // eslint-disable-next-line no-undef
    width: window.innerWidth > 750 ? '100%' : '95%',
    // fixes ipad scrolling in the drawer
    overflowX: 'hidden',
  };
  return (
    <SwipeableDrawer
      open={shouldOpen}
      onClose={clearSelectedListing}
      onOpen={_.noop /* Only open on listing click */}
      PaperProps={{ style: drawerStyle }}
    >
      {listing && (
        <ListingDetails
          index={index}
          listing={listing}
          onGoBack={clearSelectedListing}
          currencySelection={currencySelection}
          setCurrencyAction={setCurrencyAction}
          getAppFeedAction={getAppFeedAction}
          feed={feed}
        />
      )}
    </SwipeableDrawer>
  );
};

ListingDrawer.propTypes = {
  index: PropTypes.number.isRequired,
  currencySelection: PropTypes.string.isRequired,
  listing: PropTypes.object.isRequired,
  clearSelectedListing: PropTypes.func.isRequired,
};

export default ListingDrawer;
