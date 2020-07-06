import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import Card from '../components/Card'
import StyledContainer from '../components/StyledContainer'


const BlogContent = styled.div`
`;

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <StyledContainer>
        <Card card={data.markdownRemark}>
          {/* eslint-disable-next-line react/no-danger */}
          <BlogContent className="BlogContent" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Card>
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 380)
      timeToRead
      frontmatter {
        title
          date
          tags
          headerImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`

