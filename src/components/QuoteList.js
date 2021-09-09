import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { quoteAction } from "../store/quoteSlice";
import QuoteItem from "./QuoteItem";
import Card from "./UI/Card";

const StyledCard = styled(Card)`
  div {
    background-color: coral;
    border: 2px solid white;
    padding: 0.3rem;
    cursor: pointer;
    border-radius: 0.3rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    place-self: start;
    color: white;
    margin-left: 3rem;
    width: 5rem;
    text-align: center;
  }
  div:hover {
    transform: translateY(-1px) scale(1.02);
  }
`;
const QuoteList = () => {
  const dispatch = useDispatch();
  const [decendingSort, setDecendingSort] = useState(true);
  const transformSort = () => {
    setDecendingSort((prev) => {
      if (!prev) return true;
      else return false;
    });
  };
  useEffect(() => {
    if (decendingSort) dispatch(quoteAction.sortQuote({ sort: "descend" }));
    else dispatch(quoteAction.sortQuote({ sort: "ascend" }));
  }, [decendingSort, dispatch]);

  const quotes = useSelector((state) => state.quote.quotes);

  const quoteList = quotes.map((e) => (
    <QuoteItem quote={e} key={e.id}></QuoteItem>
  ));

  return (
    <StyledCard>
      <div>
        <h3 onClick={transformSort}>{`${decendingSort ? "Desc" : "Asc"}`}</h3>
      </div>
      {quoteList}
    </StyledCard>
  );
};
export default QuoteList;
