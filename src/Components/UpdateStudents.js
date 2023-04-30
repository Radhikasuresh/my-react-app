import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';

function UpdateStudents({students, setStudents}) {
    const {id} = useParams();
     const editStudent = students[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory();

    useEffect(()=>{
       setName(editStudent.name)
       setBatch(editStudent.batch)
       setGender(editStudent.gender)
       setQualification(editStudent.qualification)
    }, [editStudent])

    async function updateStudent (){
         const updatedObject = {
            name : name,
            batch : batch,
            gender: gender,
            qualification :qualification
         }
     const response = await fetch(`https://644b33bd17e2663b9deab900.mockapi.io/Users/${editStudent.id}`, {
      method:"PUT",
      body:JSON.stringify(updatedObject),
      headers:{
        "Content-Type":"application/json"
      }
     })

     const data = await response.json()
     if(data){
         console.log(updatedObject)
         students[id] = updatedObject
         setStudents([...students])
         history.push("/students")
     }
    }

  return (
    <Base
    title={"Edit a Student"}
    description={"Edit the Student data below"}
    ><br></br><br></br>
    <div>
        <label for='name'>Name: </label>
    <input
    placeholder='Enter Name'
    type ="text"
    id='name'
    value = {name}
    onChange={(e)=>setName(e.target.value)}
    /><br></br><br></br>
    <label for='batch'>Batch: </label>
    <input
    placeholder='Enter Batch'
    type ="text"
    id="batch"
    value ={batch}
    onChange={(e)=>setBatch(e.target.value)}
    /><br></br><br></br>
<label for='gender'>Gender: </label>
    <input
    placeholder='Enter Gender'
    type ="text" 
    id="gender" 
    value ={gender}
    onChange={(e)=>setGender(e.target.value)}
    /><br></br><br></br>
<label for='qual'>Degree: </label>
    <input
    placeholder='Enter Qualification'
    type ="text" 
    id="qual"
    value= {qualification}
    onChange={(e)=>setQualification(e.target.value)}
    /><br></br><br></br>

    <button className='updateButton'
    onClick={updateStudent}
    >Update Students</button>
</div>
</Base>
  )
}

export default UpdateStudents