import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { quoteAction } from "../store/quoteSlice";
import Button from "./UI/Button";
import Card from "./UI/Card";

const StyledQuoteForm = styled(Card)`
  form {
    height: 100%;
    display: grid;
    row-gap: 0.5rem;
  }
`;
const QuoteForm = () => {
  const textRef = useRef();
  const authorRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = {
      id: Math.random().toString(),
      text: textRef.current.value,
      author: authorRef.current.value,
    };
    dispatch(quoteAction.addQuote({ quote }));
    textRef.current.value = "";
    authorRef.current.value = "";
  };
  return (
    <StyledQuoteForm>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <textarea ref={textRef} id="text"></textarea>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input ref={authorRef} id="author"></input>
        </div>
        <Button>Add</Button>
      </form>
    </StyledQuoteForm>
  );
};
export default QuoteForm;
