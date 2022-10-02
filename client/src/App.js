import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import UploadImg from './pages/upload-img';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload-img" element={<UploadImg />} />
      </Routes>
    </Router>
  );
}

export default App;
