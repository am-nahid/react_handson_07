import { useSelector,useDispatch } from 'react-redux'
import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { studentUpdated } from '../Component/CounterSlice'


function EditStudent() {
    const Navi= useNavigate()
    const data =useLocation();
    const dispatch=useDispatch();
    const dataId = data.state.data
    // const dataRef = data.state
    const StdDetail = useSelector((state)=>state.student.Student.filter((item)=>item.id===dataId))
    // const dataid = data.state.Student.id
    // const StdDetail = useSelector((state)=>state.student.filter((item)=>item.id===dataid))
    // const StdDetail = useSelector((state)=>state)


    // console.log(dataId);


   const stdName = StdDetail[0].Name
   const stdAge = StdDetail[0].Age
   const stdCourse= StdDetail[0].Course
   const stdBatch = StdDetail[0].Batch

   

    const [Name, setName]=useState(stdName)
    const [Age, setAge]=useState(stdAge)
    const [Course, setCourse]=useState(stdCourse)
    const [Batch, setBatch]=useState(stdBatch)

    // const [Name, setName]=useState()
    // const [Age, setAge]=useState()
    // const [Course, setCourse]=useState()
    // const [Batch, setBatch]=useState()

    const handleSubmit=()=>{
    
      // console.log(dataId);
    
      if(Name && Age && Course && Batch){
        dispatch(studentUpdated({
          "id":dataId,
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

<h1>Edit student</h1>
     
     <div className='inputCont'>
        <div className='subContainer'>
      <input className='myInput' name='Name' value={Name} type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}  />
      <input className='myInput' name='Age' value={Age} type='text' placeholder='enter Age'  onChange={(e)=>setAge(e.target.value)}  />
      </div>
      <div className='subContainer'>
      <input className='myInput' name='Course' value={Course} type='text' placeholder='enter Course'  onChange={(e)=>setCourse(e.target.value)}  />
      <input className='myInput' name='Batch' value={Batch} type='text' placeholder='enter Batch'   onChange={(e)=>setBatch(e.target.value)} />
      </div>
      </div>
      <div className='updateBut'>
        <button className='updateButton' onClick={()=>Navi('/student')}>Cancel</button>
        <button className='updateButton' onClick={handleSubmit} >Update</button>
      </div>
    </div>
  )
}

export default EditStudent
