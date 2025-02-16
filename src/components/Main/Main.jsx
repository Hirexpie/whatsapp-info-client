import { useParams,useNavigate } from 'react-router-dom'
import '../../CSS/main.css'
import { Nav } from './Nav'
import { Messages } from './MainComponets/Messages'
import { PageQR } from './MainComponets/pageQR'
import { useEffect } from 'react'
import { useSelector } from "react-redux";

export const Main = () => {
    const mode = useParams().mode || ''
    const navigate = useNavigate()
    const { token } = useSelector(state => state.auth)
    useEffect(() => {
        if (token === null) {
            navigate('/login')
        }
    },[token,navigate])

    return<>
        <div className='content' >
            <Nav/>
            <main>
                
                { mode === 'Messages'  && <Messages/> }
                { mode === 'QR' && <PageQR/> }
                { mode === 'TeleBot' && <>test2</> }
                {/* { mode === '' && <>not</> } */}





            </main>
        </div>
    </> 
}