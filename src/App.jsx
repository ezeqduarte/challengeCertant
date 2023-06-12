import { NavLink, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "./App.css";
import { useLogOut, useLoggedIn } from "./store/useLoginStore";
import DetailsPokemon from "./pages/details/DetailsPokemon";

function App() {
  const loggedIn = useLoggedIn();
  const logOut = useLogOut();

  return (
    <>
      <nav className="flex justify-between items-center absolute w-full px-[3rem] py-2rem gap-[20px]">
        <p className="text-[40px]">Pókedex lite</p>
        {loggedIn ? (
          <NavLink to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-logout"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => logOut()}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
          </NavLink>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pokeball"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M3 12h6" />
            <path d="M15 12h6" />
          </svg>
        )}
      </nav>
      <Main>
        <Routes>
          {loggedIn ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          {loggedIn && (
            <Route path="/details-pokemon" element={<DetailsPokemon />} />
          )}
        </Routes>
      </Main>
    </>
  );
}

export default App;
