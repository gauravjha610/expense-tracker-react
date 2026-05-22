import './App.css';
import Homepage from './pages/Homepage';
// import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <LandingPage/> } />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/home' element={<Homepage/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
