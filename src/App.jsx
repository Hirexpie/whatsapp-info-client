import './App.css';
import { Header } from './components/header'
import { Routes,Route,Link } from 'react-router-dom'
import { Login } from './components/login';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/auth";
import { Main } from './components/Main/Main';
// import { Test } from './test/test'

function App() {


  // const token = useSelector((state) => state.auth.token);
  const {expiresAt,token,id} = useSelector((state) => state.auth);
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
      <Route path='/register' element={<h1> hello </h1>} />
      { token != null && <Route path='/:id/:mode' element={<Main/>} />}


      <Route path='/*' element={<h1> not faut </h1>} />

      
    </Routes>
  </>


  );
}

export default App;
