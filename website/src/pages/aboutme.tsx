import * as React from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import StyledContainer from '../components/StyledContainer'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledInnerContainer = styled.div`
display: flex;
flex-direction:column;

background-color: ${colors.ui.whisper};
border-radius: .4rem;
overflow: hidden;
box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
margin: 5rem 0rem;
}
`;

const AboutMe = () => (
  <IndexLayout>
    <Page>
      <StyledContainer>
        <StyledInnerContainer>
          <p>Someday I will write something here</p>
        </StyledInnerContainer>
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default AboutMe
