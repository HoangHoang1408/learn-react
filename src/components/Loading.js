import styled from "styled-components";
import Card from "./UI/Card";

const StyledLoading = styled.p`
  color: coral;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Loading = (props) => {
  return (
    <Card>
      <StyledLoading>{props.children}</StyledLoading>;
    </Card>
  );
};
export default Loading;
