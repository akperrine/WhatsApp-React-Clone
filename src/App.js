import "./App.css";
import { useContext } from "react";

import Login from "./components/Login/login";
import Sidebar from "./components/Sidebar/sidebar";
import Chat from "./components/Chat/chat";
import { UserContext } from "./Contexts/user.context";

const App = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div className="app">
      <div className="app-top"></div>
      {currentUser ? (
        <div className="app-container">
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
