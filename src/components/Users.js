import Card from "./UI/Card";
import User from "./User";
const Users = (props) => {
  if (props.users.length === 0)
    return <Card style={{ textAlign: "center" }}>No User Added!</Card>;
  const users = props.users.map((user) => (
    <User onDeleteUser={props.onDeleteUser} key={user.id} user={user}></User>
  ));
  return <Card>{users}</Card>;
};
export default Users;
