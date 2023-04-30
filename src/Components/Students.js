import React, { useState } from 'react'
import Base from '../Base/Base'
import data from '../Data/data'
import AddStudents from './AddStudents';
import UpdateStudents from './UpdateStudents';
import { useHistory } from 'react-router-dom';


function Students({students, setStudents}) {
   const history = useHistory();
    // delete functionality
    const deleteStudent = async (studId)=>{
      
      const response = await fetch(`https://644b33bd17e2663b9deab900.mockapi.io/Users/${studId}`, {
         method:"DELETE",
      });

      const data = await response.json()
     if(data){
       const remainingStudents = 
       students.filter((stud, idx)=> stud.id !== studId)
       setStudents(remainingStudents)
     }
    }

  console.log(students);
  return (
    <Base 
    title={"Students Dashboard"}
    description={"The page contains all students data"}
    >

         <div className='card-container'>
            {students.map((stud, idx)=>(
                     <div className='card' key={idx}>
                        <div className='content'>
                     <p><b>Name:  </b>{stud.name}</p>
                     <p><b>Batch:  </b>{stud.batch}</p>
                     <p><b>Gender:  </b>{stud.gender}</p>
                     <p><b>Qualification:  </b>{stud.qualification}</p>
                     </div>

                     <div className='control class-name'>
                     <button className='edit' 
                     onClick={()=>history.push(`/edit/${stud.id}`)} >Edit</button> {" "}
                     <button className='delete'
                     onClick={()=>deleteStudent(stud.id)}>Delete</button>
                     </div>
                    </div>
            ))}
     </div>

    </Base>
  )
}

export default Students
//crud
// read
//delete
//add
//update
// const arr = [1, 2, 3, 4, 5, 10, 15]

// function deleteFromArray(arr, num){
//   console.log(arr)
//   const removedArra = arr.filter((data, index)=>data != num)
//   console.log(removedArra)
// }

//deleteFromArray(arr, 4)