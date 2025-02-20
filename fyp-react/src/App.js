import './App.css';
import Navbar from './components/navbar';
import Centerbody from './components/center_body';
// import Tile from './components/tile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import Welcome from './components/welcome';
import AboutPage from './components/about';
import Login from './components/login';
import Contactpage from './components/contact';
import WorkPage1 from './components/workpage1';
function App() {
  return (
    
    <div className='App'>
        <Welcome />
        <Router>
          <Navbar />
            <Routes>
            <Route path='/work' element={<WorkPage1 />}></Route>
            <Route path='/contact' element={<Contactpage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Centerbody />} />
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;
