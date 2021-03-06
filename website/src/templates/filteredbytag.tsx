import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Card from '../components/Card'
import Teaser from '../components/Teaser'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

interface PageTemplateProps {
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
    allMarkdownRemark: [
      {
        html: string
        excerpt: string
        frontmatter: {
          title: string
        }
      }
    ]
  }
}

const NavLink = styled(Link)`
text-decoration:none;
 &:hover {
    text-decoration:none;
 }

 &:hover .StyledCard {
  transform: translateY(-.5%);
  background-color: ${colors.ui.light};
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
}

 &:hover Img {
  transform: scale(1.3) rotate(3deg);
 }
`;

const FilteredByTag: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        {data.allMarkdownRemark.edges.map((edge: any) => {
          return <NavLink key={edge.node.fields.slug} to={edge.node.fields.slug}>
            <Card className="StyledCard" card={edge.node} >
              <Teaser>{edge.node.excerpt}</Teaser>
            </Card>
          </NavLink>
        })}
      </Container>
    </Page>
  </IndexLayout >
)


export default FilteredByTag

export const query = graphql`
query getBlogPostsByTag($tag:[String]) {
  allMarkdownRemark(filter: {fields: {layout: {eq: "blogpost"}}, frontmatter: {tags: {in: $tag}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
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
        timeToRead
        excerpt(pruneLength: 380)
      }
    }
  }
}
`
