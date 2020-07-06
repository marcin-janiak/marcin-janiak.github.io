import * as React from 'react'
import styled from '@emotion/styled'
import Container from './Container'
import { StaticQuery, graphql } from "gatsby"
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";


import { dimensions, colors } from '../styles/variables'

const LinksContainer = styled.div`
a {
  display: inline-flex;
  flex-direction:row;
  align-items:center;
  margin-left: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s;

   color: ${colors.brand};
   &:hover {
   color: ${colors.accent};
 }

 &:hover svg {
   path {
   fill: ${colors.accent};
 }}

 }

 svg {
   max-height: 2rem;
   height: 2rem;
   max-width: 2rem;
   width: 2rem;
   margin-right: .3rem;
   transition: all .3s;
   fill: ${colors.brand};
   path {
     transition: all .3s;
     fill: ${colors.brand};
   }
 }
 `;

const StyledFooter = styled.footer`
  padding: ${dimensions.containerPadding}rem;
  width:100%;
  background-color:${colors.ui.light};
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
`

const FooterContainer = styled(Container)`
display:flex;
justify-content: center;
flex:8;
`
const CopyrightLabel = styled.div`
height: 2rem;
align-self:center;
opacity: .3;
margin-left:auto;
`


interface PageProps {
  className?: string
}

const Footer: React.FC<PageProps> = ({ children, className }) => {
  return <StyledFooter className={className}>
    <FooterContainer>
      <LinksContainer>
        <a target="_blank" href="https://github.com/marcin-janiak"><Github />Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/marcin-janiak/"><Linkedin />Linkedin</a>

      </LinksContainer>

    </FooterContainer>
    <CopyrightLabel>
      Copyright © Marcin Janiak {new Date().getFullYear()}
    </CopyrightLabel>
  </StyledFooter>
}
export default Footer
