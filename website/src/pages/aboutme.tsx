import * as React from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import StyledContainer from '../components/StyledContainer'
import StyledInnerContainer from '../components/StyledInnerContainer'

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
