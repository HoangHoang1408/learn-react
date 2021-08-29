import styled from "styled-components";
import Card from "./UI/Card";
const UserCard = styled(Card)`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin: 0.5rem 0.5rem;
`;
const User = (props) => {
  const handleClick = function () {
    props.onDeleteUser(props.user.id);
  };
  return (
    <UserCard onClick={handleClick}>
      <div>{props.user.name.toUpperCase()}</div>
      <div>{props.user.age}</div>
    </UserCard>
  );
};
export default User;
