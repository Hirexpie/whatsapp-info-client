import { Link } from 'react-router-dom'
import { LuMessageCircleMore } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";


import '../../CSS/nav.css'

export const Nav = () => {
    return <>
        <nav>
            <Link to='/:id/Messages' className='navButon'> <LuMessageCircleMore/> Собщение</Link>
            <Link to='/:id/TeleBot' className='navButon'><FaTelegram/> telegram bot </Link>
            <Link to='/:id/QR' className='navButon'><MdQrCodeScanner/> QR</Link>


        </nav>
    </>
} 