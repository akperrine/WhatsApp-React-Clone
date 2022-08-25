import "./App.css";

// import Login from "./components/Login/login";
import Sidebar from "./components/Sidebar/sidebar";

const App = () => {
  return (
    <div className="app">
      <div className="app-top"></div>
      {/* <Login /> */}
      <div className="app-container">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
