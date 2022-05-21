import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <h1 className="text-red-500 text-6xl">text-6xl</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <button class="btn">Button</button>
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-accent">Button</button>
      <button class="btn btn-ghost">Button</button>
      <button class="btn btn-link">Button</button>
    </div>
  );
}

export default App;
