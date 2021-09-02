import { useRef } from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import Card from "./UI/Card";

const StyledForm = styled.form`
  width: 70%;
  height: 30vh;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  color: coral;
  font-size: 1.2rem;
  font-weight: 600;
  div {
    width: 100%;
    display: gid;
    grid-template-columns: 1fr 3fr;
    place-items: center;
  }
`;
const Form = function (props) {
  const title = useRef(null);
  const desc = useRef(null);
  const date = useRef(null);
  const hanldePostFilm = async function (e) {
    e.preventDefault();
    const film = {
      title: title.current.value,
      desc: desc.current.value,
      date: date.current.value,
      key: Math.random().toString(),
    };
    await props.onPostFilm(film);
  };
  return (
    <Card>
      <StyledForm>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={title}></input>
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <textarea id="desc" ref={desc}></textarea>
        </div>
        <div>
          <label htmlFor="date">Release Date</label>
          <input id="date" type="date" ref={date}></input>
        </div>
        <Button onClick={hanldePostFilm}>Submit</Button>
      </StyledForm>
    </Card>
  );
};
export default Form;
