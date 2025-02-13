import "tailwindcss";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Main />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
