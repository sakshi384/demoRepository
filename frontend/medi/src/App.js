
// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import home from './Component/Table';
import {Home} from './Component/Table';
import {Search} from './Component/demo';
import './App.css';


function App() {
  return (

    <BrowserRouter>
    <div className="container">
     {/* <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3> */}

    
     <Routes>
      
     <Route path="/home" element={<Home />}></Route>
     <Route path="/product" element={<Search />}></Route>

      
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
