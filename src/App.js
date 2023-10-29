
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './common/Navbar';
import Main from './pages/Main';
import Footer from './common/Footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Main></Main>}/>
        <Route path="/home" element={<Main></Main>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
