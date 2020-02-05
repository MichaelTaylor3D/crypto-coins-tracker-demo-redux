import _ from 'lodash';
import React from 'react';

import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class GlobalMsg extends React.Component {
  handleClose = () => {
    this.props.setGlobalMsg('');
  }

  render() {
    const shouldOpen = !_.isEmpty(this.props.globalMsg);
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={shouldOpen}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className="snack-bar"
          aria-describedby="client-snackbar"
          message={(
            <span className="snack-bar__message">
              <ErrorIcon />
              {this.props.globalMsg}
            </span>
          )}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }
}

export default GlobalMsg;
