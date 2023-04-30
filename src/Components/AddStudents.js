import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'


function AddStudents({students, setStudents}) {
  const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

const createStudent = async () =>{
    // creating object from input states
    const newStudents = {
      name:name,
      batch:batch,
      qualification:qualification,
      gender: gender,
}

const response = await fetch("https://644b33bd17e2663b9deab900.mockapi.io/Users", {
  method:"POST",
  body:JSON.stringify(newStudents),
  headers :{
    "Content-Type":"application/json"
  },
})
const data = await response.json()
  setStudents([...students, data])
  history.push("/students")
}

  return (
    <Base
    title={"Add New Student"}
    description={"We can able to add new students data here"}
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
    
      

        <button className='addStuButton'
        onClick={createStudent}
        >Add Students</button>
    </div>
    </Base>
  )
}

export default AddStudents