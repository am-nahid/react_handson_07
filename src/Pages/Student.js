import React from "react";

 import { Link, useNavigate } from "react-router-dom"

import { useSelector } from "react-redux";

const Students = () => {
  

  const data= useSelector((state)=>state.student.Student)
  // console.log(data);

   const navigate = useNavigate();


  return (
    <>
      
      <h1>Students Details</h1>
      <button onClick={()=>{navigate('/new-student')}} className="button">Add new student</button>
      <div className="tableStyle">
         <table>
         <thead>
          <tr  className="table-head">
            
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
           
          </tr>
          </thead>
           
           <tbody>
           {
              data.map((item,index)=>{
                return(
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td><Link to={'/edit-student'} state={{data: item.id}}>edit</Link></td>
                </tr>
                )
              })
            }
        
           </tbody> 
         
         </table> 
        </div>
    </>
  );
};

export default Students;


//  {/* {
//            ContextData.entries.map((item,index)=>{
//              return(
//              <tr key={index}>
//                <td>{item.name}</td>
//                <td>{item.Age}</td>
//                <td>{item.Course}</td>
//                <td>{item.Batch}</td>
//                <td><Link to={'/edit-student'} state={{data: index}}>edit</Link></td>
//              </tr>
//              )
//            })
//          } */}



