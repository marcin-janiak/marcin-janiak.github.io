import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Footer from '../components/Footer'
import { colors } from '../styles/variables'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}


const StyledContent = styled(LayoutMain)`
    grid-area: posts;
    `


const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
