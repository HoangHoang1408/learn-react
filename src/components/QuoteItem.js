import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./UI/Card";

const StyledQuoteItem = styled(Card)`
  width: 90%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  place-items: center;
  padding: 0.5rem;
  margin: 0.5rem 0 0 0;
`;
const QuoteItem = (props) => {
  return (
    <StyledQuoteItem>
      <p>{props.quote.text}</p>
      <p>{props.quote.author}</p>
      <Link to={`quotes/${props.quote.id}/comments`}>Detail</Link>
    </StyledQuoteItem>
  );
};
export default QuoteItem;
