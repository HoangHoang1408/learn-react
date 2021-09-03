import Task from "./Task";
import Card from "./UI/Card";

const TaskList = (props) => {
  if (props.tasks.length === 0) return <Card>No card found!</Card>;
  const task = props.tasks.map((e) => <Task key={e.id} task={e}></Task>);
  return <Card>{task}</Card>;
};
export default TaskList;
