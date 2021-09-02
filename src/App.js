import { Fragment, useCallback, useEffect, useState } from "react";
import FilmList from "./components/FilmList";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";
function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [err, setErr] = useState(null);
  const fetchFilm = useCallback(async function () {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/films.json"
      );
      const films = [];
      const data = await response.json();
      if (!data) throw new Error("No films found!");
      Object.keys(data).forEach((e) => {
        films.push(data[e]);
      });
      setFilms(films);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const postFilm = async function (film) {
    try {
      const response = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/films.json",
        {
          method: "POST",
          body: JSON.stringify(film),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setErr(err.message);
    }
  };
  useEffect(() => {
    fetchFilm();
  }, [fetchFilm]);
  return (
    <Fragment>
      <Form onPostFilm={postFilm}></Form>
      <Card>
        <Button onClick={fetchFilm}>Fetch</Button>
      </Card>
      {!isLoading && !err && films.length === 0 && (
        <Loading>No movies found</Loading>
      )}
      {isLoading === false && !err && <FilmList films={films}></FilmList>}
      {isLoading && <Loading>Loading...</Loading>}
      {!isLoading && err && <Loading>{err}</Loading>}
    </Fragment>
  );
}

export default App;
