import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

const Update = () => {
  const {id} = useParams();
  // const users = useSelector((state)=>state.users);

 // console.log(users);
  //  const existingUser = users.filter(f => f.id == Routerid);
  //   console.log(existingUser)
  // const {name, email} = existingUser[0];
  // const {name, email} = existingUser;
  // const uname = existingUser.name
  // console.log(uname)

  //   const [uname, setUserName]=useState(name);
  //   const [uemail, setUserEmail]=useState(email);

  const users = useSelector((state)=>state.users);

  const existingUser = users.filter(f => f.id == id);

  const {name, email} = existingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)

  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleUpdate = (event)=>{
  event.preventDefault();
  dispatch(updateUser({
    id:id,
    name:uname,
    email:uemail
  }));
  navigate('/')
}
  return (
   <>
   <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      {/* <h6>You are entering {userName} {userEmail}</h6> */}
      <h3>Update User</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' placeholder='enter name' 
        value={uname} onChange={e => setName(e.target.value)}
          />
        </div> 
        <div>
          <label htmlFor='name'>Email:</label>
          <input type='email' name='email' className='form-control' placeholder='enter email'
        value={uemail} onChange={e => setEmail(e.target.value)}
           /> 
        </div>
        <br/>
        <button className='btn btn-info'>Submit</button>
      </form>
    </div>
   </div>
   </>
  )
}

export default Update