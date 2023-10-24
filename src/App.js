import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stock from './pages/Stock';
import AddItem from './pages/Additem';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ManageUsers from './pages/Manageusers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manageusers" element={<ManageUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
