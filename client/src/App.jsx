import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
            firstName: '',
            lastName: '',
            age: 0,
            email: '',
            phoneNumber: '',
            address: '',
  });
  useEffect(()=>{
    getAllUser();
  },[])

  const getAllUser = () => {
    axios.get('http://localhost:3000/getAllUser').then((res)=> {
      console.log("res ==", res?.data?.data)
      const _users = res?.data?.data;
      setUsers(_users);
    }).catch((error) => console.log("error =", error))
  }
  const handleSubmitUser = () => {
    console.log("userData ==", userData)
    axios.post('http://localhost:3000/createUser',{...userData}).then((res)=> {
      getAllUser();
    }).catch((error) => console.log("error =", error))
  }
  return (
    <div>
    {
      users&&users.map((user)=> {
        return (
          <div className='flex justify-center'>
          <div className='flex justify-center bg-orange-500'><h3>Name: </h3><p>{user?.firstName} {user?.lastName}</p></div>
          <div className='flex justify-center bg-orange-500'><h3>Age: </h3><p>{user?.age} </p></div>
          <div className='flex justify-center bg-orange-500'><h3>Email: </h3><p>{user?.email} </p></div>
          <div className='flex justify-center bg-orange-500'><h3>Phone Number: </h3><p>{user?.phoneNumber} </p></div>
          <div className='flex justify-center bg-orange-500'><h3>Address: </h3><p>{user?.address} </p></div>
          </div>
        )
      })
    }
    <div>
      {console.log("userData ==", userData)}
      <input type="text" onChange={e => setUserData(prev => ({...prev, firstName : e.target.value}))}/>
      <input type="text" onChange={e => setUserData(prev => ({...prev, lastName : e.target.value}))}/>
      <input type="text" onChange={e => setUserData(prev => ({...prev, age : e.target.value}))}/>
      <input type="text" onChange={e => setUserData(prev => ({...prev, email : e.target.value}))}/>
      <input type="text" onChange={e => setUserData(prev => ({...prev, phoneNumber : e.target.value}))}/>
      <input type="text" onChange={e => setUserData(prev => ({...prev, address : e.target.value}))}/>
    </div>
    <button onClick={handleSubmitUser}>Create User</button>
    </div>
  )
}

export default App
