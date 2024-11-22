import {createSlice} from '@reduxjs/toolkit'

const inpSlice=createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addtask:(state,action)=>{
            const newtask={...action.payload,id:state.todos.length}
            
            state.todos.push(newtask)
        },
        updateStatus:(state,action)=>{
            const todo=state.todos.find((item)=>action.payload==item.id)
            if(todo){
                todo.status='completed'
            }
        },
        deletetodo:(state,action)=>{
            state.todos=state.todos.filter((item)=>item.id !==action.payload)
        }
    }

})

export default inpSlice.reducer
export const{addtask,updateStatus,deletetodo}=inpSlice.actions