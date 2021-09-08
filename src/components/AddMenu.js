import { Fragment, useEffect, useState } from "react";
import reactDom from "react-dom";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { menuAction } from "../store/menuSlice";
import { uiAction } from "../store/uiSlice";
import Button from "./UI/Button";
import Input from "./UI/Form/Input";
import useInput from "./UI/Form/useInput";

const StyledAddMenu = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  color: coral;
  h1 {
    color: coral;
  }
  .overlay {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .addMenu {
    padding: 1rem;
    position: absolute;
    z-index: 6;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    background-color: rgb(230, 230, 230);
    width: 40vw;
    height: 60vh;
    color: black;
    display: grid;
    place-items: center;
  }
  form {
    display: grid;
    place-items: center;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 100%;
  }
  ${({ valid }) =>
    !valid &&
    css`
      .button {
        opacity: 0.6;
      }
      .button:hover {
        transform: none;
      }
    `}
`;
const AddMenu = function (props) {
  const dispatch = useDispatch();
  const handleCloseAddMenu = () => {
    dispatch(uiAction.closeAddMenu());
  };

  // form state
  const [valid, setValid] = useState(false);
  const { state: descState, setState: setDescState } = useInput();
  const { state: titleState, setState: setTitleState } = useInput();
  const { state: priceState, setState: setPriceState } = useInput();

  const checkDesc = (val) => val.length > 0;
  const checkTitle = (val) => val.length > 0;
  const checkPrice = (val) => val > 0;

  const temp = descState.isValid && titleState.isValid && priceState.isValid;

  useEffect(() => {
    setValid(temp);
  }, [temp]);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    const menu = {
      title: titleState.input
        .trim()
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" "),
      descript: descState.input,
      price: Math.round(priceState.input * 100) / 100,
      id: Math.random().toString(),
    };
    dispatch(menuAction.addToMenu({ menu }));
    setDescState.reset();
    setPriceState.reset();
    setTitleState.reset();
    dispatch(uiAction.closeAddMenu());
  };
  return (
    <Fragment>
      {reactDom.createPortal(
        <StyledAddMenu valid={valid}>
          <div className="overlay" onClick={handleCloseAddMenu}></div>
          <div className="addMenu">
            <h1>Add a menu</h1>
            <form onSubmit={handleSubmit}>
              <Input
                state={titleState}
                setState={setTitleState}
                checkFunc={checkTitle}
                type="text"
                id="Title"
              ></Input>
              <Input
                state={descState}
                setState={setDescState}
                checkFunc={checkDesc}
                type="text"
                id="Description"
              ></Input>
              <Input
                state={priceState}
                setState={setPriceState}
                checkFunc={checkPrice}
                type="number"
                id="Price"
              ></Input>
              <div>
                <Button type="submit" className="button">
                  Add
                </Button>
                <Button onClick={handleCloseAddMenu}>Close</Button>
              </div>
            </form>
          </div>
        </StyledAddMenu>,
        document.getElementById("addCart-root")
      )}
    </Fragment>
  );
};
export default AddMenu;
