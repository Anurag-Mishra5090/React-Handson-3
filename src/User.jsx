import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'


function User() {
  
const navigate = useNavigate();
  const [state, sset] = useState(
    {
      Name: '',
      Department: '',
      Rating: '',
      employee: []
    }
  );
  const changeHandler = (e) => {
    console.log(e.target.value);
    sset({ ...state, [e.target.name]: e.target.value })
    console.log(state)

  }

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(state);
    const obj = {
      Name: state.Name,
      Department: state.Department,
      Rating: state.Rating
    }
    var arr = state.employee;
    arr.push(obj)

    sset({ employee: arr })
    console.log(state)
    navigate('/back', {state})


  }
  



  return (
    <div>


      <div>

       
        <h1 className='heading'>Employee Feedback Form</h1>
        <div className='form-container'>
          <form >
            <label >Name :</label>
            <br />
            <input type="text" name="Name" value={state.Name} onChange={changeHandler}></input>
            <br />
            <label>Department :</label>
            <br />
            <input type="text" name="Department" value={state.Department} onChange={changeHandler}></input>
            <br />
            <label>Rating :</label>
            <br />
            <input type="number" name="Rating" value={state.Rating} onChange={changeHandler}></input>
            <br />
            <button onClick={clickHandler}>Submit</button>
          </form>
        </div>

      </div>

     

    </div>
  )

}


export default User;