import { useEffect, useState } from "react"
import { api } from "../../../Api"
import '../../../CSS/messages.css'


const Message = (e) => {
    const date = new Date(e.createdAt)
    return <>
        <div className="message">
            <h3>
                ползаватель {e.from} удалил собщение в чате с {e.to}
            </h3>
            <h4>
                удаленное время: {date.getDate() < 9 ? '0' + date.getDate() : date.getDate()}.
                {date.getMonth() < 9 ? '0' + date.getMonth() : date.getMonth()}.
                {date.getFullYear() < 9 ? '0' + date.getFullYear() : date.getFullYear()} года,
                в {date.getHours() < 9 ? '0' + date.getHours() : date.getHours()}:
                {date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()}</h4>
            <p>Собщение: {e.body}</p>

        </div>
    </>
}


export const Messages = () => {
    const [page,setPage] = useState(0)
    const [messages,setMessages] = useState([])
    const [countPages,setCountPages] = useState(0)

    // const { messages,countPages } = useSelector(state => state.deletedMessages)
    // const dispatch = useDispatch()
    
    
    const PageButton = ( {pagePosi,isActive=false}) => {
        if (page+1 === pagePosi) {
            isActive = true
        }
        if (pagePosi === 0 || countPages+1 === pagePosi) {
            return<></>
        }
        return <>
            <button onClick={() => {setPage(pagePosi-1)}} className={isActive ? "pageButton ActivePage" : "pageButton" }> {pagePosi} </button>
        </>
    }
    console.log(page);
    
    useEffect(() => {
        const getMessages = async () => {
            const { data } = await api.get(`/whatsapp/getDelitedMessages?page=${page}`)
            console.log(data)
            // dispatch(setMessages(data))
            setCountPages(Math.ceil(data.total/100))
            setMessages(data.whatsappMessages)
        }
        getMessages()
    },[page])
    return <>
        <div className="MessagesBlok" >
            
            {messages.map(e => 
                (<div key={e._id} >{Message(e)}</div>)
            )}

            
            <div className="pageButtons"> 
                {page > 1 &&<> <PageButton pagePosi={1} /> <p>...</p> </>}
                {Array.from({ length: 3 }, (_, index) => (
                    <PageButton key={index} pagePosi={page+index} />
                ))}
                {page < countPages-2 && <> <p>...</p> <PageButton pagePosi={countPages} />  </>}
            </div>
        </div>
    </>    
}