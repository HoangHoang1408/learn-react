import styled from "styled-components";
import Card from "./UI/Card";

const StyledFilm = styled(Card)`
  width: 95%;
  height: fit-content;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: coral;
  .title {
    margin-bottom: 1rem;
  }
  .date {
    margin-bottom: 1rem;
  }
`;
const Film = function (props) {
  return (
    <StyledFilm>
      <div className="title">{props.film.title}</div>
      <div className="date">
        Released Date:
        {props.film.date.toLocaleString("en-US", {
          month: "numeric",
          year: "numeric",
          day: "numeric",
        })}
      </div>
      <div>{props.film.desc}</div>
    </StyledFilm>
  );
};
export default Film;
