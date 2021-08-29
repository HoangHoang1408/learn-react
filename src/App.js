import "./App.css";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";
import InputForm from "./components/InputForm";
import Users from "./components/Users";
function App() {
  const defaultUsers = [
    { name: "hoang", age: 19, id: Math.random().toString() },
    { name: "huy", age: 19, id: Math.random().toString() },
    { name: "bin", age: 19, id: Math.random().toString() },
  ];
  const [users, setUsers] = useState(defaultUsers);
  // err
  const [err, setErr] = useState({
    showErr: false,
    message: "",
    title: "",
  });
  const handleErr = function (showErr, title, message) {
    setErr({
      showErr,
      message,
      title,
    });
  };
  const closeErr = function () {
    setErr({
      showErr: false,
      message: "",
      title: "",
    });
  };
  const handleAddUser = function (user) {
    setUsers((pre) => [user, ...pre]);
  };
  const handleDeleteUser = function (id) {
    setUsers((pre) => [...pre.filter((user) => user.id !== id)]);
  };
  return (
    <div className="app">
      {err.showErr && <ErrorModal err={err} onCloseErr={closeErr}></ErrorModal>}
      <InputForm onAddUser={handleAddUser} onErr={handleErr}></InputForm>
      <Users users={users} onDeleteUser={handleDeleteUser}></Users>
    </div>
  );
}

export default App;
