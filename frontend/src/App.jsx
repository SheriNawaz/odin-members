import HomePage from "./components/HomePage"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import CreatePost from "./components/CreatePost";

axios.defaults.withCredentials = true;

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://odin-members-v7yb.onrender.com/api/auth/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if(loading){
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser}/>}/>
        <Route path="/login" element={user?<Navigate to='/'/>:<Login setUser={setUser}/>}/>
        <Route path="/signup" element={user?<Navigate to='/'/>:<SignUp setUser={setUser}/>}/>
        <Route path="/create" element={user?<CreatePost user={user} setUser={setUser}/>:<Navigate to='/'/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
