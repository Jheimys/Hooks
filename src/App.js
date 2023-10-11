import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
