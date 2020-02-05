import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const AppBarContainer = styled.div`
  height: 4rem;
  color: #606c84;
  background: white;
  padding: 0 0.75rem 0 0.75rem;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
`;

const AppBarContainerWithDrawer = styled(AppBarContainer)`
  position: absolute;
`;

const AppBarLeft = styled.div`
  display: flex;
  width: 1.5625rem;
  img {
    width: 50%;
    height: 50%;
    /* thicken the image a little bit */
    filter: drop-shadow(0px 0px 0px rgba(255,255,255,1));
  }
`;

const AppBarMiddle = styled.div`
  font-size: 1.0625rem;
  font-family: 'Avenir Next DemiBold';
  width: 100%;
  display: flex;
  justify-content: center;

  span {
    margin-left: -1.125rem;
  }
`;

const AppBarRight = styled.div`
  width: 1.5625rem;
  margin-right: 4.5625rem;
  font-size: 1.0625rem;
  font-family: 'Avenir Next DemiBold';
`;

const AppBar = (props) => {
  const {
    useDrawer,
    left,
    middle,
    right,
  } = props;

  const Container = useDrawer ? AppBarContainerWithDrawer : AppBarContainer;

  return (
    <Container>
      <AppBarLeft>{left}</AppBarLeft>
      <AppBarMiddle>{middle}</AppBarMiddle>
      <AppBarRight>{right}</AppBarRight>
    </Container>
  );
};

AppBar.defaultProps = {
  useDrawer: false,
};

AppBar.propTypes = {
  left: PropTypes.node,
  middle: PropTypes.node,
  right: PropTypes.node,
  useDrawer: PropTypes.bool,
};

export default AppBar;
