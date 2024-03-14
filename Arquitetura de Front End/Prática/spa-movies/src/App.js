import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { MovieDatail } from "./views/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDatail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
