import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletetodo, updateStatus } from './slice'
const Display = () => {
    const tasks=useSelector((state)=>state.todo.todos)
    const dispatch=useDispatch()
    console.log(tasks);
 
  return (
    <div >
      {tasks.map((item)=>(
        <div style={{width:'350px',height:'80px',backgroundColor:'red',color:'white'}}><h1>{item.task}</h1>
       <Link to={`/detaile/${item.id}`}><button>view detailes</button></Link>
       {item.status !=='completed' &&(
 <button onClick={()=>dispatch(updateStatus(item.id))}>complete</button>
       )}
       <button onClick={()=>dispatch(deletetodo(item.id))}>delete task</button>
       </div>
      ))}
    </div>
  )
}

export default Display
