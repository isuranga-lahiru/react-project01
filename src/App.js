
import './App.css';
import { useEffect } from 'react';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

import { AuthProvider, useAuth } from './context/AuthContext';

import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';

function AppRoutes() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/admin-login' element={<AdminLogin/>}/>
      <Route 
        path='/admin-dashboard' 
        element={
          <ProtectedRoute>
            <AdminDashboard/>
          </ProtectedRoute>
        }
      />
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
