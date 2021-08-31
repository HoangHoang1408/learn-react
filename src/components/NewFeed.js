import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
const NewFeed = function (props) {
  const ctx = useContext(AuthContext);
  return (
    <Card>
      <div>Some thing will be shown here...</div>
      <Button onClick={ctx.onLogout}>Log Out</Button>
    </Card>
  );
};
export default NewFeed;
