import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAutentication } from './hooks/useAutentication';


//context
import { AuthProvider } from './context/AuthContext';


// pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import Post from './pages/Post/Post';



function App() {
  
  const [user, setUser] = useState(undefined);
  const { auth } = useAutentication();

  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=> {
      setUser(user);
    });
  },[auth])

  if(loadingUser){
    return <p>carregando...</p>
  }

  return (
    <div className='App'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/mini_blog/' element={<Home />} />
                <Route path='/mini_blog/search' element={<Search />} />
                <Route path='/mini_blog/posts/:id' element={<Post />} />
                <Route path='/mini_blog/about' element={<About />} />
                <Route path='/mini_blog/login' element={!user ? <Login /> : <Navigate to='/mini_blog/'/>} />
                <Route path='/mini_blog/register' element={!user ? <Register /> : <Navigate to='/mini_blog/' />} />
                <Route path='/mini_blog/dashboard' element={user ? <Dashboard /> : <Navigate to='/mini_blog/login' />} />
                <Route path='/mini_blog/createpost' element={user ? <CreatePost /> : <Navigate to='/mini_blog/login' />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      </div>
  )
}

export default App;
