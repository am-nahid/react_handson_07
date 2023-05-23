import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { studentAdded } from '../Component/CounterSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function NewStudent() {
 
    const Navi= useNavigate()
    const data = useSelector((state)=>state.student)
    const dispatch=useDispatch()

    const [Name, setName]=useState("")
    const [Age, setAge]=useState("")
    const [Course, setCourse]=useState("")
    const [Batch, setBatch]=useState("")
  
    const handleSubmit=()=>{
      // console.log(data);
      if(Name && Age && Course && Batch){
        dispatch(studentAdded({
          "id":data.length,
          "Name": Name,
          "Age": Age,
          "Course":Course,
          "Batch":Batch

        }))
      }
      Navi('/student')
    }
  return (
    
    <div>
         <h1>New student</h1>
     
     <div className='inputCont'>
        <div className='subContainer'>
      <input className='myInput' name='Name' value={Name} type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}  />

      <input className='myInput' name='Age' type='text' value={Age}placeholder='enter Age' onChange={(e)=>setAge(e.target.value)}  />

      </div>
      <div className='subContainer'>
      <input className='myInput' name='Course' type='text' value={Course}placeholder='enter Course' onChange={(e)=>setCourse(e.target.value)}  />

      <input className='myInput' name='Batch' type='text' value={Batch}placeholder='enter Batch' onChange={(e)=>setBatch(e.target.value)}  />

      </div>
      </div>
      <div className='updateBut'>
        <button className='updateButton' onClick={()=>Navi('/student')}>Cancel</button>
        <button className='updateButton' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
  

export default NewStudent
