import { useEffect, useState } from "react"
import { api } from "../../../Api"
import { QRCodeCanvas } from "qrcode.react";
import io from 'socket.io-client'
import axios from "axios";

const server = io('http://localhost:50000')

export const PageQR = () => {
    const [qrCode,setQrCode] = useState('')


    useEffect(()=> {
        const getQr = async () => {
            server.on('qr', (qr) => {
                setQrCode(qr)
                console.log(qr)
            })
        }
        axios.get('http://localhost:50000/test').then(getQr)


     
        
    },[])

    return (<>
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold">Сканируйте QR-код</h2>
            {qrCode !== '' ? <QRCodeCanvas value={qrCode} size={256} /> : <p>Ожидание QR-кода...</p>}
        </div>
    </>)
}