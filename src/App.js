import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-contrainer">
        <Header />
      </div>
      <div className="main-contrainer">
        <div className="sidenav-contrainer"></div>
        <div className="app-content">
          {/* Outlet là tín hiệu cho việc component con đc load ở đây */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
