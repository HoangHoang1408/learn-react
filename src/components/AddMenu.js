import { Fragment, useContext, useRef } from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import MainContext from "../store/mainStore";
import Button from "./UI/Button";

const StyledAddMenu = styled.section`
  position: fixed;
  top: 0;
  left: 0;
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
  label {
    font-size: 1.5rem;
    font-weight: 600;
    color: coral;
    place-self: center end;
  }
  .part {
    width: 70%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  .special {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
  }
  .input {
    padding: 0.5rem;
    outline: none;
    border: 3px solid coral;
    color: coral;
    font-size: 1rem;
  }
  .button {
    margin-right: 0.5rem;
  }
`;
const AddMenu = function (props) {
  const ctx = useContext(MainContext);
  const refTitle = useRef(null);
  const refDesc = useRef(null);
  const refPrice = useRef(null);
  const handleAddNewMenu = function (e) {
    e.preventDefault();
    const menu = {
      title: refTitle.current.value,
      descript: refDesc.current.value,
      price: refPrice.current.value,
      id: Math.random().toString(),
    };
    refTitle.current.value = "";
    refDesc.current.value = "";
    refPrice.current.value = "";
    ctx.onAddMenuClose();
    ctx.onAddNewMenu(menu);
  };
  return (
    <Fragment>
      {reactDom.createPortal(
        <StyledAddMenu>
          <div className="overlay" onClick={ctx.onAddMenuClose}></div>
          <div className="addMenu">
            <h1>Add a menu</h1>
            <form>
              <div className="part">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title1"
                  required
                  className="input"
                  ref={refTitle}
                ></input>
              </div>
              <div className="part">
                <label htmlFor="description">Descript:</label>
                <input
                  type="text"
                  id="description1"
                  required
                  className="input"
                  ref={refDesc}
                ></input>
              </div>
              <div className="part">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  id="price1"
                  required
                  className="input"
                  ref={refPrice}
                ></input>
              </div>
              <div className="part special">
                <Button
                  type="submit"
                  className="button"
                  onClick={handleAddNewMenu}
                >
                  Add
                </Button>
                <Button onClick={ctx.onAddMenuClose}>Close</Button>
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
