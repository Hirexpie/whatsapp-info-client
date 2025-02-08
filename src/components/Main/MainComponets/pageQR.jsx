import { useEffect, useState } from "react"
import { QRCodeCanvas } from "qrcode.react";
import io from 'socket.io-client'
import '../../../CSS/pageQr.css'
import { WhatsappApi } from "../../../Api";

const server = io('http://localhost:50000')

const AuthTrue = ({phoneNumber,logOut}) => {
    const logout = async() => {
        await WhatsappApi.delete('/logout')
        logOut(false)
    }

    return <>
        <h2> вы уже привезали номер: {phoneNumber} </h2>
        <button onClick={logout} className="logoutButton" >отвезать</button>
    
    
    </>
}



const AuthFalse = ({qrCode}) => {
    return <>
        <h2 className="text-xl font-bold">Сканируйте QR-код</h2>

        {qrCode !== '' ? <div className="QR" > <QRCodeCanvas value={qrCode} size={256} /></div> : <p>Ожидание QR-кода...</p> }
    
    
    </>
}

export const PageQR = () => {
    const userId = localStorage.getItem('userId')
    const [isAuth,setIsAuth] = useState(false) 
    const [qrCode,setQrCode] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('э, это тут не должно быть, это паходу ошибка, собщи разабу если не сложно :)')
    
    
    server.on('authed',({isAuth,phoneNum})=> {
        setIsAuth(isAuth)
        setPhoneNumber(phoneNum)
    })

    useEffect(()=> {
        
        const getQr = async () => {
            server.on('qr', (qr) => {
                setQrCode(qr)
            })
        }
        // server.on()
        // console.log(userId)
        WhatsappApi.post('/isAuth', { id: userId }).then(({data}) => {
            if (data.isAuth) {
                setIsAuth(true)
                setPhoneNumber(data.phoneNumber)
                return
            }
            getQr()
        })
    },[userId])
    return (<>
        <div className="QRblok">
            {isAuth && <AuthTrue phoneNumber={phoneNumber}/>}
            {!isAuth && <AuthFalse logOut={setIsAuth} qrCode={qrCode}  /> }
        </div>
    </>)
}