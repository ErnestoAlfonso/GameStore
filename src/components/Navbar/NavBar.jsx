import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./navbar.css";
import { Home } from "../../pages/Home/Home";
import { Market } from "../../pages/Market/Market";
import { Game } from "../../pages/Home/Game";

const Register = () => <h1>Register Page</h1>;

export const NavBar = () => {
  return (
    <BrowserRouter>
      <header className="containerHeader">
        <section className="containerHeaderLeft">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/market">
            Market
          </NavLink>
          <NavLink to="/game">
            Game
          </NavLink>
          <a className="ghost" href="#">
            Party
          </a>
          <a className="ghost" href="#">
            Premium
          </a>
        </section>

        <section className="containerHeaderCenter">
          <h3>GameCom</h3>
        </section>
        <section className="containerHeaderRight">
          <NavLink to="/log">
            Sign in
          </NavLink>
          <NavLink id="register" to="/register">
            Create account
          </NavLink>
          <button id="themeButton">
            LigthMode
          </button>
        </section>
      </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/market" element={<Market />} />
          <Route path="/game/:gameId" element={<Game />} />
        </Routes>

    </BrowserRouter>
  );
};
