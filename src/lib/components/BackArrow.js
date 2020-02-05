import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Circle = styled.div`
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 50%;
    background: #e7f2fd;
    position: relative;
    border: none;
    cursor: pointer;
`;

const BackArrowPoint = styled.div`
    position: absolute;
    top: 0.75rem;
    width: 1.0625rem;
    height: 0.1875rem;
    background-color: #66a7f2;
    margin-left: 0.25rem;

    &::before {
        content: '';
        position: absolute;
        width: 0.625rem;
        height: 0.1875rem;
        top: 0.1875rem;
        right: 0.5rem;
        background-color: #66a7f2;
        transform: rotate(45deg);
    }

    &::after {
        content: '';
        position: absolute;
        width: 0.625rem;
        height: 0.1875rem;
        top: -0.1875rem;
        right: 0.5rem;
        background-color: #66a7f2;
        transform: rotate(-45deg);
    }
`;

const BackArrow = ({ onClick }) => (
  <Circle onClick={onClick}>
    <BackArrowPoint />
  </Circle>
);

BackArrow.propTypes = {
  onClick: PropTypes.func,
};

export default BackArrow;
