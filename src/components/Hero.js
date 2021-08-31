import styled from "styled-components";
import img from "../img/hero.jpg";
const StyledHero = styled.section`
  width: 100%;
  height: 40vh;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  position: relative;
  .maindiv {
    padding: 2rem 3rem;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(50, 50, 50);
    border-radius: 1rem;
    display: grid;
    grid-template-rows: 3fr 2fr 2fr;
    place-items: center;
    text-align: center;
    margin-bottom: 3rem;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1rem;
  }
`;
const Hero = (props) => {
  return (
    <StyledHero>
      <div className="maindiv">
        <h1>Some Title Here</h1>
        <p>
          vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
          vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
        </p>
        <p>
          vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
          amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
        </p>
      </div>
    </StyledHero>
  );
};
export default Hero;
