import React from 'react'

const Result = () => {
  return (
    <>
<div className='datainsert'>
        <div  className='inserted-image'>
          
          {

            state.employee.map((value, index) => {
              return (

                <span key={index}>{value.Name} {value.Department} {value.Rating}</span>

              )

            })
          }
          


        </div>
        <div >
          
          <button onClick={goback} style={gobackdata}>Go Back</button>
        </div>

      </div>


    </>
  )
}

export default Result