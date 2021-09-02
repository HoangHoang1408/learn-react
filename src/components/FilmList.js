import Film from "./Film";
import Card from "./UI/Card";

const FilmList = function (props) {
  const films = props.films.map((e) => {
    return <Film key={e.key} film={e}></Film>;
  });
  return <Card>{films}</Card>;
};
export default FilmList;
