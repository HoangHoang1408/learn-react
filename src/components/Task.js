import styled from "styled-components";
import Card from "./UI/Card";

const StyledTask = styled(Card)`
  padding: 0.5rem 2rem;
  text-align: center;
  width: 80%;
  font-size: 1.8rem;
  color: coral;
  font-weight: 700;
`;
const Task = (props) => {
  return <StyledTask>{props.task.task}</StyledTask>;
};
export default Task;
