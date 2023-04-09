// import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
// import { Conversation, ConversationState } from "../models/Conversation";
// import { Message } from "../models/Message";
// // import { RootState } from "./ConversationStore";


// export interface NewConversationAction {
//     conversation: Conversation
// }

// export interface UpdateConversationAction {
//     conversationId: string, // maybe
//     conversation: Conversation
// }

// export interface NewMessageAction {
//     conversationId: string, //maybe
//     message: Message
// }


// const initialState: ConversationState = {
//     // might be able to skate by using the Id just to reference the correct conv from all convs
//     currentConversation: { id: '', userId: '', messages: []},
//     allConversations: []
// }

// export const conversationSlice = createSlice({
//     name: 'conversations',
//     initialState,
//     // The `reducers` field lets us define reducers and generate associated actions
//     reducers: {
//       currentConversation: (state) => {
//         return state
//       },
//       newConversation: (state, action: PayloadAction<NewConversationAction>) => {
//         // Redux Toolkit allows us to write "mutating" logic in reducers. It
//         // doesn't actually mutate the state because it uses the Immer library,
//         // which detects changes to a "draft state" and produces a brand new
//         // immutable state based off those changes
//         state.allConversations.push(action.payload.conversation)
//         state.currentConversation = action.payload.conversation
//         // console.log("STATE")
//         // console.log(state)
//       },
//     //   updateConversation: (state, action: UpdateConversationAction) => {
//     //     // state.allConversations.map(conv => {
//     //     //     if (conv.id == payload.conversationId) {
//     //     //         state.allConversations.messa
//     //     //     }
//     //     // })
//     //   },
//       // Use the PayloadAction type to declare the contents of `action.payload`

//       newMessage: (state, action: PayloadAction<NewMessageAction>) => {
//         state.allConversations.map(conv => {
//             // might even be able to just use state.currentconversationId
//             if (conv.id === action.payload.conversationId) {
//                 return conv.messages.push(action.payload.message);
//             }
//             return conv;
//         })
        
//       },
//     },
//     // The `extraReducers` field lets the slice handle actions defined elsewhere,
//     // including actions generated by createAsyncThunk or in other slices.
//     // extraReducers: (builder) => {
//     //   builder
//     //     .addCase(incrementAsync.pending, (state) => {
//     //       state.status = 'loading';
//     //     })
//     //     .addCase(incrementAsync.fulfilled, (state, action) => {
//     //       state.status = 'idle';
//     //       state.value += action.payload;
//     //     })
//     //     .addCase(incrementAsync.rejected, (state) => {
//     //       state.status = 'failed';
//     //     });
//     // },
//   });


// export const { currentConversation, newConversation, newMessage} = conversationSlice.actions;
  
// export default conversationSlice.reducer;