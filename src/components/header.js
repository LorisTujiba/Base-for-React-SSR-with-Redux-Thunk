import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type:none;
`
const Item = styled.li`
  margin-right: 10px;
`
const LinkElem = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colorOrange};
  }
`;

class Header extends Component{
  render(){
    return(
      <HeaderContainer>
        <List>
          <Item>
            <LinkElem to={`/`}>Home</LinkElem>
          </Item>
          <Item>
            <LinkElem to={`/test`}>Test</LinkElem>
          </Item>
        </List>
      </HeaderContainer>
    )
  }
}

export default Header;
