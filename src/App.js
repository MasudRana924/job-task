
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './common/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar></Navbar>

    </BrowserRouter>
  </div>
  );
}

export default App;
