import { useRef } from "react";
import styled from "styled-components";
import useSendRequest from "../hooks/useSendRequest";
import Button from "./UI/Button";
import Card from "./UI/Card";

const StyledAddTask = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  input {
    color: coral;
    width: 40%;
    outline: none;
    border: none;
    border-bottom: 3px solid coral;
  }
  .a {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const AddTask = function (props) {
  const inputRef = useRef(null);
  const handleSendData = function (e) {
    e.preventDefault();
    postRequest(
      {
        url: "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          task: inputRef.current.value,
          id: Math.random().toString(),
        },
      },
      (data) => {}
    );
    inputRef.current.value = "";
    setTimeout(() => {
      props.onGetAgain();
    }, 200);
  };
  const { isLoading, err, sendRequest: postRequest } = useSendRequest();

  return (
    <Card>
      <StyledAddTask>
        <input ref={inputRef} type="text" className="a"></input>
        {isLoading && !err && <p>Sending ...</p>}
        {!isLoading && !err && (
          <Button className="a" onClick={handleSendData}>
            Add Task
          </Button>
        )}
      </StyledAddTask>
      {err && <Card>{err}</Card>}
    </Card>
  );
};
export default AddTask;
