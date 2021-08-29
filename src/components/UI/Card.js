import styled from "styled-components";
const StyledCard = styled.div`
  border-radius: 1rem;
  margin: 0rem auto;
  border: 1px solid coral;
  padding: 1.5rem;
  width: 40vw;
  height: fit-content;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
  background: white;
  min-height: 0;
  color: coral;
  font-weight: bold;
`;
const Card = ({ style, children, className, onClick }) => (
  <StyledCard style={style} className={className} onClick={onClick}>
    {children}
  </StyledCard>
);
export default Card;
