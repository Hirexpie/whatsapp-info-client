import { combineReducers,configureStore } from "@reduxjs/toolkit"
import authReduser from './auth/index'
import deletedMessagesReduser from './whatsapp/deletedMessages'


const rootReduser = combineReducers({
    auth: authReduser,
    deletedMessages: deletedMessagesReduser
})

export default configureStore({
    reducer:rootReduser,
})