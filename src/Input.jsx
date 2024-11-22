import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from './slice'
import Display from './Display'
import { Link } from 'react-router-dom'
const Input = () => {
    const [task, setTask] = useState("")
    const [detailes, setDetailes] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addtask({ task: task, detailes: detailes,status:"pending"}))
        setTask('')
        setDetailes('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>task :</h1><input placeholder='add task' value={task} onChange={(e) => setTask(e.target.value)} />
                <input type="text" placeholder='detailed' value={detailes} onChange={(e) => setDetailes(e.target.value)} />
                <button type='submit'>add</button>
            </form>
            <Display />
            <Link to={'/completed'}><button style={{margin:'35px'}}>completd list</button></Link>
        </div>
    )
}

export default Input
