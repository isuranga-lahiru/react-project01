
import './App.css';
import { useCallback, useEffect } from 'react';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import NewSite from './components/NewSite';
import About from './Pages/About';
import Contact from './Pages/Contact';

function AppRoutes() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/admin-login' element={<AdminLogin/>}/>
      <Route path='/admin-dashboard' 
        element={
          <ProtectedRoute>
            <AdminDashboard/>
          </ProtectedRoute>
        }
      />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}
function App() {
  // This takes the repository name on GitHub,
  // but leaves it blank (root) on localhost.
  const basename = process.env.NODE_ENV === 'production' ? '/react-project01' : '';

  return (
    <Router basename={basename}>
      <AuthProvider>
        <AppRoutes />
          
      </AuthProvider>
    </Router>
  );
}
export default App;
