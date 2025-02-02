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
    
    
    const pageButton = (pagePosi,isActive=false) => {
        if (page+1 == pagePosi) {
            isActive = true
        }
        return <>
            <button type="submit" onClick={() => {setPage(pagePosi-1)}} className={isActive ? "pageButton ActivePage" : "pageButton" }> {pagePosi} </button>
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

            

            { countPages < 3 && <div className="pageButtons"> {pageButton(page+1)}{pageButton(page+2)} </div> }

            { countPages < 4 && <div className="pageButtons"> {pageButton(page+1)}{pageButton(page+2)}{pageButton(page+3)} </div> }

            { page === 0 && <div className="pageButtons" > {pageButton(page+1,true)} {pageButton(page+2)} {pageButton(page+3)} <p>.....</p> {pageButton(countPages)}  </div>}
            { page === 1 && <div className="pageButtons" > {pageButton(page)} {pageButton(page+1,true)} {pageButton(page+2)} <p>.....</p> {pageButton(countPages)}  </div>}
            { page === 2 && <div className="pageButtons" > {pageButton(page)} {pageButton(page+1,true)} {pageButton(page+2)} <p>.....</p> {pageButton(countPages)}  </div>}
            { page > 2 && page < countPages-2 && <div className="pageButtons" >{pageButton(1)} <p>.....</p> {pageButton(page)} {pageButton(page+1,true)} {pageButton(page+2)} <p>.....</p> {pageButton(countPages)}  </div>}


            { page === countPages-2 && <div className="pageButtons" > {pageButton(1)} <p>.....</p> {pageButton(page)} {pageButton(page+1,true)} {pageButton(page+2)}  </div>}
            { page === countPages-1 && <div className="pageButtons" > {pageButton(1)} <p>.....</p> {pageButton(page-1)} {pageButton(page)} {pageButton(page+1,true)}  </div>}

        </div>
    </>    
}