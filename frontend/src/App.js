import Homepage from './pages/Homepage.js';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import Notfound from './pages/Notfound';

import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes';

import { AuthProvider } from './context/authProvider.js';
import Profilepage from './pages/ProfilePage.js';
import TransactionPage from './pages/TransactionPage.js';
import PublicRoutes from './routes/PublicRoutes.js';
import { TransactionProvider } from './context/transactionProvider.js';



function App() {
  return (
    
    <BrowserRouter>
    <AuthProvider>
      <TransactionProvider>
    <Routes>
      <Route path='/' element={ 
        <PublicRoutes>
          <LandingPage/>
        </PublicRoutes>
       } />
      <Route path='/login' element={
        <PublicRoutes>
          <LoginPage/>
        </PublicRoutes>
      } />
      <Route path='/signup' element={
        <PublicRoutes>
          <SignupPage/>
        </PublicRoutes>
      } />
      <Route path='/profile' element={
        <ProtectedRoutes>
          <Profilepage/>
        </ProtectedRoutes>
      } />
      <Route path='/transactions' element={
        <ProtectedRoutes>
          <TransactionPage/>
        </ProtectedRoutes>
      } />
      <Route path='/home' element={
        <ProtectedRoutes>
          <Homepage/>
        </ProtectedRoutes>
      } 
      />
      <Route path='*' element={<Notfound/>} />
    </Routes>
    </TransactionProvider>
    </AuthProvider>
    </BrowserRouter>
    
    
  );
}

export default App;
