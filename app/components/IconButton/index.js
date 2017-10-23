/**
*
* IconButton
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from './Icons.js'


const IconButtonStyled = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #41addd;
  vertical-align: center;


  &:active {
    transform: translateY(4px)
  }
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
`
function IconButton(props) {
  return (
    <div>
      <IconButtonStyled>
        <Image src={Icons[props.icon]}/>
        <span>{props.text}</span>
      </IconButtonStyled>
    </div>
  );
}

IconButton.propTypes = {
 icon: PropTypes.any,
 text: PropTypes.string,
};

export default IconButton;
