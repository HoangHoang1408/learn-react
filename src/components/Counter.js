import useCounter from "../hooks/useCounter";
import Card from "./UI/Card";

const Counter = (props) => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
};
export default Counter;
