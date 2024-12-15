import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./assets/interview1/Navbar";
import Today from './assets/interview1/Today';
import Home2 from "./assets/Interview2/Home2";


const App = () => {
  return (

    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/home2" element={<Home2/>} />
            
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
};

export default App;

