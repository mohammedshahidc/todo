import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Detailes = () => {
    const {id}=useParams()
    console.log(id);
    const task=useSelector((state)=>state.todo.todos)
    const filter=task.filter((item)=>item.id==id)
    console.log(filter);
  return (
    <div>
     { filter.map((item)=>(
        <div style={{width:'350px',height:'300px',backgroundColor:'red',color:'white'}}>
            <h1>name:{item.task}</h1>
            <h1>detailes:{item.detailes}</h1>
            <h1>status:{item.status}</h1>
        </div>
     ))}
    </div>
  )
}

export default Detailes
