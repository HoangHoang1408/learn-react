import styled from "styled-components";

const StyledCard = styled.section`
  padding: 2rem 1rem;
  width: 50%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 2px solid coral;
  border-radius: 2rem;
  background: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3); ;
`;
const Card = function (props) {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};
export default Card;
