import { createSlice } from "@reduxjs/toolkit";

const deletedMessagesSlice = createSlice({
  name: "deletedMessages",
  initialState: {
    messages: [],
    countPages:0
  },
  reducers: {
    setMessages: (state, action) => {
        state.messages = action.payload.whatsappMessages;
        state.countPages = action.payload.total / 100;
    },
    
  },
});

export const { setMessages } = deletedMessagesSlice.actions;
export default deletedMessagesSlice.reducer;