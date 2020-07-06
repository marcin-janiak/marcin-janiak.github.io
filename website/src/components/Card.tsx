import * as React from 'react'
import styled from '@emotion/styled'

import { Link, navigate } from 'gatsby'
import Img from "gatsby-image"

import { heights, dimensions, colors } from '../styles/variables'

const StyledCard = styled.div`
background-color: ${colors.ui.whisper};
border-radius: .4rem;
overflow: hidden;
box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
margin: 5rem 0rem;

// //Move higher
// &:hover {
//   transform: translateY(-.5%);
//   background-color: ${colors.ui.light};
//   box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
// }
`


const HeaderImage = styled(Img)`
max-height: 20rem;
object-fit: cover;

picture>img {
  transition: all 0.4s!important;
}
`;

const StyledTitle = styled.h1`
font-size: 3rem;
font-weight: 500;
transition: .3s all;
color: ${colors.brand};
`;

const BlogPostInfo = styled.div`
color: ${colors.black};
display: flex;
justify-content: flex-end;
font-weight:400;

`;

const InnerCard = styled.div`
padding: 2rem;
`;


const Tag = styled.div`
color: ${colors.white};
border: none;
border-radius: .4rem;
display: block;
background-color: ${colors.brand};
margin: .25rem;
padding: .1rem .5rem;
cursor: pointer;


&:hover {
  background-color: ${colors.accent};
  color: ${colors.brand};
  text-decoration: none;
}
`;

const Tags = styled.div`
padding-bottom: 2rem;
display: flex;

& > div {
transition: .3s all;
}

`;

interface ContainerProps {
  className?: string
  card: any
}

const Card: React.FC<ContainerProps> = ({ card, children, className }) => {
  return <StyledCard className={className}>
    <HeaderImage fluid={card.frontmatter.headerImg.childImageSharp.fluid} alt="" />
    <InnerCard className="InnerCard">
      <StyledTitle>{card.frontmatter.title}</StyledTitle>
      <BlogPostInfo>
        {card.frontmatter.date} &#183; {card.timeToRead} min reading
      </BlogPostInfo>
      <Tags>
        {card.frontmatter.tags.map((value: string) => {
          return <Tag onClick={(event) => {
            event.preventDefault();
            navigate(`/blog/tags/${value}`)
          }} key={value}>{value}</Tag>
        })}
      </Tags>
      {children}
    </InnerCard>
  </StyledCard >
}

export default Card
