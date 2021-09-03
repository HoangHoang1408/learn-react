import { Fragment, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Card from "./components/UI/Card";
import useSendRequest from "./hooks/useSendRequest";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformData = (taskobj) => {
    const loadedTasks = [];
    for (const taskKey in taskobj) {
      loadedTasks.push({
        id: taskobj[taskKey].id,
        task: taskobj[taskKey].task,
      });
    }
    setTasks(loadedTasks);
  };
  const { isLoading, err, sendRequest: fetchTasks } = useSendRequest();
  const getRequest = () => {
    fetchTasks(
      {
        url: "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      transformData
    );
  };
  useEffect(getRequest, [fetchTasks]);
  return (
    <Fragment>
      <AddTask onGetAgain={getRequest}></AddTask>
      {isLoading && err === null && <Card>Loading ...</Card>}
      {err && <Card>err</Card>}
      {!isLoading && err === null && <TaskList tasks={tasks}></TaskList>}
    </Fragment>
  );
}

export default App;
