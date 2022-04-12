import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import  Login from "./Login";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path ="/" element={<Login />}/>
          <Route path="/cart" element={< Cart />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
