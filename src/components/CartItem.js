import { useContext } from "react";
import styled from "styled-components";
import MainContext from "../store/mainStore";
import Button from "./UI/Button";
const StyledCartItem = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  .a1 {
    display: flex;
    justify-content: space-between;
    width: 200%;
  }
  .price {
    color: rgb(117, 46, 19);
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;
const CartItem = function (props) {
  const ctx = useContext(MainContext);
  const handleAddAmount = function () {
    ctx.onAddAmount(props.item);
  };
  const handleDecreaseAmount = function () {
    ctx.onDecreaseAmount(props.item);
  };
  return (
    <StyledCartItem className={props.className}>
      <div>
        <h1>{props.item.title}</h1>
        <div className="a1">
          <p className="price">${props.item.price}</p>
          <p>x {props.item.amount}</p>
        </div>
      </div>
      <div>
        <Button className="button" onClick={handleAddAmount}>
          +
        </Button>
        <Button onClick={handleDecreaseAmount}>-</Button>
      </div>
    </StyledCartItem>
  );
};
export default CartItem;
