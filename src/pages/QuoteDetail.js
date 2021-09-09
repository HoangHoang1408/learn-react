import { useEffect } from "react";
import { Route, useParams } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import { getQuote } from "../../api/api";
import useHttp from "../../hooks/useHttp";
import Comment from "../components/Comment";
const QuoteDetail = () => {
  const params = useParams();
  const { sendRequest, data, error, status } = useHttp(getQuote, true);
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);
  return (
    <Fragment>
      <h1>{quote}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comment></Comment>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
