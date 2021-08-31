import { Fragment } from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import Button from "../UI/Button";

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
  return (
    <Fragment>
      {reactDom.createPortal(
        <StyledAddMenu>
          <div className="overlay"></div>
          <div className="addMenu">
            <h1>Add a menu</h1>
            <form>
              <div className="part">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  required
                  className="input"
                ></input>
              </div>
              <div className="part">
                <label htmlFor="description">Descript:</label>
                <input
                  type="text"
                  id="description"
                  required
                  className="input"
                ></input>
              </div>
              <div className="part">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  id="price"
                  required
                  className="input"
                ></input>
              </div>
              <div className="part special">
                <Button className="button">Add</Button>
                <Button>Close</Button>
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
