import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartAction } from "../store/cartSlice";
import Button from "./UI/Button";
const StyledCartItem = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  .a1 {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }
  .a2 {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-items: center;
  }
  .price {
    color: rgb(117, 46, 19);
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }
`;
const CartItem = function (props) {
  const dispatch = useDispatch();
  const handleAddAmount = function () {
    dispatch(cartAction.addCartItem({ item: props.item, amount: 1 }));
  };
  const handleDecreaseAmount = function () {
    dispatch(cartAction.removeCartItem({ id: props.item.id }));
  };
  return (
    <StyledCartItem className={props.className}>
      <div className="a2">
        <h1>{props.item.title}</h1>
        <div className="a1">
          <p className="price">${props.item.price}</p>
          <p>x {props.item.quantity}</p>
          <p> = ${props.item.price * props.item.quantity}</p>
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
