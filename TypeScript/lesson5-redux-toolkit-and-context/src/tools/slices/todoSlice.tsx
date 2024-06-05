import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface todoTypes {
    id:string;
    text:string;
}


const myTodo:todoTypes[] = [
    {
        id:crypto.randomUUID(),
        text:"Learn lessons"
    }
]

const todoSlice = createSlice({
    name:'todo',
    initialState:myTodo,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
                const newTodo:any = {id:crypto.randomUUID(),text:action.payload};
                state.push(newTodo);
        }
    }
})

export default todoSlice.reducer;
export const {add} = todoSlice.actions;