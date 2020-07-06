import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import StyledContainer from '../components/StyledContainer'
import styled from "@emotion/styled";
import { colors } from '../styles/variables'

const StyledForm = styled.form`
display: flex;
flex-direction:column;

background-color: ${colors.ui.whisper};
border-radius: .4rem;
overflow: hidden;
box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
margin: 5rem 0rem;

button {
padding: .5rem;
margin-top: 1rem;
border-radius:.4rem;
border-style:solid;
border-width:1px;
border-color: ${colors.brand};

background-color: ${colors.brand};
color: ${colors.white};
cursor:pointer;
font-weight:500;

&:hover {
  background-color: ${colors.accent};
  border-color: ${colors.accent};

color: ${colors.brand};
}

}

background-color: ${colors.ui.whisper};
border-radius: .4rem;
padding: 2rem;
`;

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
padding-top: 1rem;
border-radius:2px;
font-weight:500;

input[type="text"],
input[type="email"],
textarea {
  padding-left: .4rem;
margin-top: .2rem;

  height: 3rem;
  border-width:1px;

  border-radius:.4rem;
  border-style:solid;

  &:focus {
    border-color: ${colors.brand};
    box-shadow: 0 .4rem .8rem rgba(0, 0, 0, .2);
    outline: none !important;
    border-style:solid;
  }

}
textarea {
  height: 8rem;
  padding-top: .4rem;
  resize: none;
}

`;

const Contact = () => (
  <IndexLayout>
    <Page>
      <StyledContainer>
        <StyledForm action="https://formsubmit.co/3d0d037baad0b3ccb16b5cca4f6f6b7e"
          method="POST">
          <StyledLabel>
            Email (required):
          <input type="email" name="email" required />
          </StyledLabel>
          <StyledLabel>
            Name (required):
          <input type="text" name="name" required />
          </StyledLabel>
          <StyledLabel>
            Subject (required):
          <input type="text" name="subject" required />
          </StyledLabel>
          <StyledLabel>
            Content (required):
          <textarea name="content" required />
          </StyledLabel>
          <button type="submit" className="darkeningButton">Send</button>
        </StyledForm>
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default Contact
