import { useContext } from "react";
import Login from "./components/Login";
import NewFeed from "./components/NewFeed";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <AuthContextProvider>
      {!ctx.isLogedIn && <Login></Login>}
      {ctx.isLogedIn && <NewFeed></NewFeed>}
    </AuthContextProvider>
  );
}

export default App;
