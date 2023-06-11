import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <nav className="navbar">
        <p>Pókedex lite</p>
        {logged && <p>Cerrar sesión</p>}
      </nav>
      <Main>
        <Routes>
          {logged ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
        </Routes>
      </Main>
    </>
  );
}

export default App;
