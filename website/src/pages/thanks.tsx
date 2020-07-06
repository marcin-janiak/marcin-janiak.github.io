import * as React from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import StyledContainer from '../components/StyledContainer'
import StyledInnerContainer from '../components/StyledInnerContainer'
import styled from '@emotion/styled'
import Thanks from '../assets/thanks.png'
import { useStaticQuery, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

const WithPadding = styled(StyledInnerContainer)`
padding: 5rem;
h1 {
align-self: center;
}
h5 {
  align-self: center;
  opacity: .5;
}

`

const HeaderImage = styled(Img)`
max-height: 40rem;
margin-left:-5rem;
margin-right:-5rem;
margin-top:-5rem;
object-fit: cover;
margin-bottom: 2rem;
`;

const ThanksPage = () => (
  <IndexLayout>
    <Page>
      <StyledContainer>
        <WithPadding>
          <StaticQuery
            query={graphql`
       query {
    file(relativePath: { eq: "images/thanks.png" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
    `}
            render={(data: any) => (<HeaderImage fluid={data.file.childImageSharp.fluid} alt="A corgi smiling happily" />)} />

          <h1>Thanks for submitting</h1>
          <h1>a contact form!</h1>
          <h5>Yeah, they're my cats ( ͡° ͜ʖ ͡°)</h5>
        </WithPadding>
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default ThanksPage
