import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartAction } from "../store/cartSlice";
import Button from "./UI/Button";
const StyledMenuItem = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  color: black;
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  .price {
    color: rgb(230, 100, 70);
    font-size: 1.2rem;
    font-weight: 700;
  }
  input {
    width: 4rem;
    height: 2rem;
    padding: 0.2rem 0.4rem;
    outline: none;
    border: 1px solid coral;
  }
  label {
    margin-right: 0.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const MenuItem = function (props) {
  const ref = useRef();
  const dispatch = useDispatch();
  const handleAddCartItem = () => {
    dispatch(
      cartAction.addCartItem({ amount: +ref.current.value, item: props.item })
    );
  };
  return (
    <StyledMenuItem>
      <div>
        <h3>{props.item.title}</h3>
        <p>{props.item.descript}</p>
        <div className="price">${props.item.price}</div>
      </div>
      <form>
        <div>
          <label htmlFor="amountinput">Amount</label>
          <input
            id="amountinput"
            type="number"
            min="1"
            step="1"
            defaultValue="1"
            ref={ref}
          ></input>
        </div>
        <Button onClick={handleAddCartItem}>Add</Button>
      </form>
    </StyledMenuItem>
  );
};
export default MenuItem;
