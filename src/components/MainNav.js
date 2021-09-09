import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.header`
  width: 100%;
  height: 8vh;
  display: grid;
  grid-template-columns: 3fr 7fr;
  place-items: center;
  border: 2px solid coral;
  nav {
    border: 2px solid red;
    width: 100%;
    height: 100%;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: inherit;
    height: inherit;
  }
  .nav-link {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
const MainNav = () => {
  return (
    <StyledNav>
      <h1>Great Quote</h1>
      <nav>
        <ul>
          <Link className="nav-link" to="/quotes">
            Quotes
          </Link>
          <Link className="nav-link" to="/new-quote">
            New Quote
          </Link>
        </ul>
      </nav>
    </StyledNav>
  );
};
export default MainNav;
