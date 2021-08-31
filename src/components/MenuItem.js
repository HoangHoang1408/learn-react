import styled from "styled-components";
import Button from "../UI/Button";
const StyledMenuItem = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  color: black;
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  .price {
    color: rgb(230, 100, 70);
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
const MenuItem = function (props) {
  return (
    <StyledMenuItem>
      <div>
        <h3>Shushi</h3>
        <p>Finest fish and vegies</p>
        <p className="price">$256</p>
      </div>
      <div>
        <div>
          Amount: <span>2</span>
        </div>
        <Button>Add</Button>
      </div>
    </StyledMenuItem>
  );
};
export default MenuItem;
