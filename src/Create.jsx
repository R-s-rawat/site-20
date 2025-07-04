import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setUserName]=useState('');
  const [email, setUserEmail]=useState('');
  const users = useSelector((state)=>state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addUser({id:users[users.length-1].id +1,name, email}))
    navigate('/')
  }

  return (
   <>
   <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      {/* <h6>You are entering {userName} {userEmail}</h6> */}
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' placeholder='enter name' onChange={(e)=>setUserName(e.target.value)}/>
        </div> 
        <div>
          <label htmlFor='name'>Email:</label>
          <input type='email' name='email' className='form-control' placeholder='enter email' onChange={(e)=>setUserEmail(e.target.value)}/> 
        </div>
        <br/>
        <button className='btn btn-info'>Submit</button>
      </form>
    </div>
   </div>
   </>
  )
}

export default Create