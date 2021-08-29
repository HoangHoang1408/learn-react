import Card from "./UI/Card";
import Button from "./UI/Button";
import styled, { css } from "styled-components";
import { useState } from "react";

const InputCard = styled(Card)`
  margin: 2rem auto;
  width: 40vw;
  .formInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
  }
  .inputDiv {
    margin-bottom: 1rem;
    width: 70%;
    /* border: 2px solid red; */
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .inputField {
    padding: 0.5rem;
    border: 1px solid coral;
    outline: none;
  }
  .inputLabel {
    font-size: 1rem;
    font-weight: bold;
  }
  ${({ nameEmpty }) =>
    nameEmpty &&
    css`
      .nameField {
        background-color: rgba(255, 0, 0, 0.37);
      }
    `}
  ${({ ageEmpty }) =>
    ageEmpty &&
    css`
      .ageField {
        background-color: rgba(255, 0, 0, 0.37);
      }
    `}
`;
const InputForm = function (props) {
  // name
  const [inputName, setInputName] = useState("");
  const [nameEmpty, setNameEmpty] = useState(false);

  const [inputAge, setInputAge] = useState("");
  const [ageEmpty, setAgeEmpty] = useState(false);

  const handleAgeChange = function (e) {
    setInputAge(e.target.value);
    if (e.target.value.trim().length > 0) setAgeEmpty(false);
    else setAgeEmpty(true);
  };
  const handleNameChange = function (e) {
    setInputName(e.target.value);
    if (e.target.value.trim().length > 0) setNameEmpty(false);
    else setNameEmpty(true);
  };
  const handleSubmitForm = function (e) {
    e.preventDefault();
    const user = {
      id: Math.random().toString(),
      name: inputName.trim(),
      age: inputAge.trim(),
    };
    if (inputAge.length === 0 || inputName.length === 0)
      return props.onErr(true, "Infor required!", "Please fill all the fields");
    if (inputAge < 1)
      return props.onErr(true, "Invalid!", "Please fill in a correct age!");
    props.onAddUser(user);
    setInputAge("");
    setInputName("");
  };
  return (
    <InputCard nameEmpty={nameEmpty} ageEmpty={ageEmpty}>
      <form className="formInput" onSubmit={handleSubmitForm}>
        <div className="usernameInput inputDiv">
          <label htmlFor="username" className="inputLabel">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="inputField nameField"
            onChange={handleNameChange}
            value={inputName}
          ></input>
        </div>
        <div className="ageInput inputDiv">
          <label htmlFor="age" className="inputLabel">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="inputField ageField"
            onChange={handleAgeChange}
            value={inputAge}
          ></input>
        </div>
        <Button>Add</Button>
      </form>
    </InputCard>
  );
};
export default InputForm;
