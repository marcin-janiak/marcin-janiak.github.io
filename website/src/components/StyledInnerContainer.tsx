import { colors } from "../styles/variables";
import styled from "@emotion/styled";

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

export default StyledInnerContainer;
