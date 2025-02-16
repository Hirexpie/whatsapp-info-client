import './App.css';
import { Header } from './components/header'
import { Routes,Route,Link } from 'react-router-dom'
import { Login } from './components/login';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/auth";
import { Main } from './components/Main/Main';
import { Registration } from './components/register';
import { NotFound } from './components/Notfound';
// import { Test } from './test/test'

function App() {


  // const token = useSelector((state) => state.auth.token);
  const {expiresAt,id} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(expiresAt)
    if (Date.now() >= expiresAt) {
      dispatch(logout()); // Разлогиниваем пользователя
    }
  }, [expiresAt, dispatch]);
  return (
  <>
    <Header/>

    <Routes>
      <Route path='/' element={<Link to={'/'+id+'/Messages'} > перейти </Link>} />

      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/:id/:mode' element={<Main/>} />


      <Route path='/*' element={<NotFound/>} />

      
    </Routes>
  </>


  );
}

export default App;
