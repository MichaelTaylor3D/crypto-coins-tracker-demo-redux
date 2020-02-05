import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import './style.css';

const styleOverride = {
  width: '150px',
};

const IndeterminateProgressOverlay = () => (
  <div className="progess">
    <Dialog
      contentStyle={styleOverride}
      modal
      open
      paperClassName="progress-paper-override"
      title=""
    >
      <CircularProgress size={80} thickness={5} />
    </Dialog>
  </div>
);

export default IndeterminateProgressOverlay;
