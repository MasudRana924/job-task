
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './common/Navbar';
import Main from './pages/Main';
import Footer from './common/Footer';
import { useEffect, useState } from 'react';
import Preloader from './components/loader/Preloader';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
      {loading ? <div>
      <Preloader></Preloader>
    </div> :<div className="App">
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Main></Main>}/>
        <Route path="/home" element={<Main></Main>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>}
    </div>
    
  );
}

export default App;


