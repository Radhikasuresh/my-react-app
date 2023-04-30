import React from 'react'
import { useHistory } from 'react-router-dom'

const Base = ({title, description, children}) => {
  const history = useHistory();
  return (
    <div className='main-component base-component'>
      

      <button className='dashboardButton'
      onClick={()=>history.push("/")}
      >Dashboard</button>

      <button className='listButton'
      onClick={()=>history.push("/students")}
      >Student-List</button>

      <button className='addButton'
      onClick={()=>history.push("/add")}
      >Add-student</button>

         <header>
            <h1 className='heading'>{title}</h1>
         </header>
         <main className='main-segment'>
             <h2>{description}</h2>
             <div>
               {children}
             </div>
           
         </main>
    </div>
  )
}

export default Base