import styled from "styled-components";

const StyledCard = styled.section`
  width: 60vw;
  margin: 2rem auto;
  padding: 2rem 1rem;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  background-color: white;
  display: grid;
  place-items: center;
`;
const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};
export default Card;
