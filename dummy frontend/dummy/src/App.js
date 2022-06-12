import logo from './logo.svg';
import './App.css';
import Demotable from './Components/Dummytable';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import updateForm from './Components/update';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        
      <Demotable></Demotable>
      <Routes>
         
          <Route path="/update" component={updateForm}></Route>
        </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
