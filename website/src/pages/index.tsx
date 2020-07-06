import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Card from '../components/Card'
import styled from '@emotion/styled'
import Teaser from '../components/Teaser'
import { colors } from '../styles/variables'

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

 &:hover img {
  transform: scale(1.3) rotate(3deg);
 }
`;

const IndexPage = ({ data }) => (
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



export default IndexPage

export const query = graphql`query getBlogPosts {
  allMarkdownRemark(filter: {fields: {layout: {eq: "blogpost"}}, rawMarkdownBody: {}, internal: {}}, sort: {fields: frontmatter___date, order: DESC}) {
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

