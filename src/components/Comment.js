import Button from "./UI/Button";
import Card from "./UI/Card";
const Comment = (props) => {
  const comments = props.comments.map((e) => (
    <div key={e.id}>
      <h3>{e.user}</h3>
      <h3>{e.text}</h3>
    </div>
  ));
  return (
    <Card>
      <form>
        <div>
          <label htmlFor="user">User</label>
          <input id="user"></input>
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea id="comment"></textarea>
        </div>
        <Button>Add Comment</Button>
      </form>
      <ul>{comments}</ul>
    </Card>
  );
};
export default Comment;
