import { Link } from 'react-router-dom'
import { LuMessageCircleMore } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";


import '../../CSS/nav.css'

export const Nav = () => {
    const userId = localStorage.getItem('userId') || ''
    return <>
        <nav>
            <Link to={`/${userId}/Messages`} className='navButon'> <LuMessageCircleMore/> Собщение</Link>
            <Link to={`/${userId}/TeleBot`} className='navButon'><FaTelegram/> telegram bot </Link>
            <Link to={`/${userId}/QR`} className='navButon'><MdQrCodeScanner/> QR</Link>


        </nav>
    </>
} 