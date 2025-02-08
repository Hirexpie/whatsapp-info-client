import { useParams } from 'react-router-dom'
import '../../CSS/main.css'
import { Nav } from './Nav'
import { Messages } from './MainComponets/Messages'
import { PageQR } from './MainComponets/pageQR'

export const Main = () => {
    const mode = useParams().mode || ''
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