import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.js";
import Home from "./components/home.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<h1>Hello Mate</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
