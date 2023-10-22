import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Router/Pages/Home";
import About from "./Router/Pages/About";
import Page404 from "./Router/Pages/Page404";
import { Navigate } from 'react-router-dom';
import User from './Router/Pages/User';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Link to="/">Home</Link><br />
    <Link to="/about">About</Link><br />
    <Link to="/contact">Contact</Link><br />
    <Link to="/user/Anil">Anil</Link><br />
    <Link to="/user/Peter">Peter</Link><br />
      <Routes>
        <Route path="/"  element={<Home />}></Route>
        <Route path="/about"  element={<About />}></Route>
        {/* <Route path="/*"  element={<Page404 />}></Route> */}
        <Route path="/user/:name"  element={<User />}></Route>
        <Route path="/*"  element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
