import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: rgb(180, 78, 41);
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  place-items: center;
  padding: 0.5rem 8rem 0.5rem 10rem;
  .nav__title {
    font-size: 2rem;
    font-weight: bold;
    place-self: center start;
  }
  .nav__item {
    padding: 0.6rem 3rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    background: rgb(117, 46, 19);
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.408);
    cursor: pointer;
    place-self: center end;
  }
  .nav__item:hover {
    transform: scale(1.04);
  }
  .cart__number {
    padding: 0.1rem 0.5rem;
    border-radius: 0.3rem;
    background-color: rgb(180, 78, 41);
    margin-left: 1rem;
  }
`;
const NavBar = (props) => {
  return (
    <StyledNavBar className={props.className}>
      <div className="nav__title">ReactMeals</div>
      <div className="nav__item">Add Menu</div>
      <div className="nav__item">
        Your Cart<span className="cart__number">2</span>
      </div>
    </StyledNavBar>
  );
};
export default NavBar;
