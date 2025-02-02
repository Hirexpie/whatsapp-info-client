import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../store/auth' 
import '../CSS/header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token) 
    // const isLogin = false
    return (
        <header>
            <h2><Link className='logo' to='/'>Whatsapp info</Link></h2>

            {token == null && <Link to='/login' className='buttonLogin'> <h3>вход</h3></Link>} 
            {token != null && <div className='buttonLogin' onClick={() => dispatch(logout())} ><h3>выход</h3></div>} 

        </header>
    )
}


