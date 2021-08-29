import Card from "./UI/Card";
import Button from "./UI/Button";
import styled from "styled-components";
const TempErrorModal = function (props) {
  return (
    <div className={props.className} onClick={props.onCloseErr}>
      <Card className="modal">
        <div className="head">{props.err.title}</div>
        <div className="body">{props.err.message}</div>
        <Button className="foot" onClick={props.onCloseErr}>
          Okay
        </Button>
      </Card>
    </div>
  );
};
const ErrorModal = styled(TempErrorModal)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(194, 194, 194, 0.8);
  display: grid;
  place-items: center;
  z-index: 2;
  .modal {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 1rem;
    place-items: center;
  }
  .head {
    font-size: 2rem;
  }
`;
export default ErrorModal;
