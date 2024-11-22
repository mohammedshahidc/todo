import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Compleeted = () => {
    const task=useSelector((item)=>item.todo.todos)
    const filter=task.filter((item)=>item.status=='completed')
    console.log("com",filter);
  return (
    <div>
      {filter.map((item)=>(
        <div style={{width:'350px',height:'100px',backgroundColor:'red',color:'white'}}>
 <Link to={`/detaile/${item.id}`}> <h1>name:{item.task}</h1></Link>
        </div>
      ))}
    </div>
  )
}

export default Compleeted
