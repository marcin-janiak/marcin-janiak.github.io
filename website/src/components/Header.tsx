import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  position: fixed;
  width:100%;
  z-index:999;
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  transition: .3s all;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${colors.accent}
  }
`

const NavLink = styled(Link)`
  color: ${colors.white};
  margin-left: 1rem;
  transition: .3s all;
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${colors.accent}
  }
`

const MenuContainer = styled.div`
margin-left:auto;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <MenuContainer>
        <NavLink to="/aboutme">About me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </MenuContainer>
    </HeaderInner>
  </StyledHeader>
)

export default Header
