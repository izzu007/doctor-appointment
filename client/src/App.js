import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from './pages/ApplyDoctor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" 
          element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
          } />
          <Route path="/apply-doctor" 
          element={
          <ProtectedRoute>
            <ApplyDoctor />
          </ProtectedRoute>
          } />
          <Route path="/register" 
          element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
          } />
          <Route path="/login" 
          element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
