import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



import './App.css'

const Back = () => {
const navigate = useNavigate()
const location = useLocation();


  
  const goback = (e) => {
    e.preventDefault();
navigate('/')

  }

  return (
    <div>
      <h1 style={{color : 'white', textAlign: 'center'}}>Employee Dateails</h1>
        <div className='datainsert'>
        <div  className='inserted-image'>
          
          {

            location.state.employee.map((value, index) => {
              return (

                <span key={index}>{value.Name} {value.Department} {value.Rating}</span>

              )

            })
          }
          


        </div>
        <div >
          <button onClick={goback}>Go Back</button>
          
        </div>

      </div>

    </div>
  )
}

export default Back