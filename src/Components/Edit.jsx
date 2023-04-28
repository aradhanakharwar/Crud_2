import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import{useParams} from 'react-router-dom'

export default function AddUser() {
  
  const{id}=useParams()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    state: ''
  })

  const navigate = useNavigate()

  const formHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  const loadUser=async()=>{
    const api=await axios.get(`http://localhost:3002/users/${id}`)
    setUser(api.data)
  }

  useEffect(()=>{
    loadUser()
  },[])

  const formSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3002/users/${id}`, user)
    // console.log(user)
    navigate('/alluser',alert('submitted'))  }
  
  return (
    <div>
      <form style={{ margin: 'auto', width: '350px' }} onSubmit={formSubmit}>
        <div>
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='name'
            value={user.name}
            onChange={e=>formHandle(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            value={user.email}
            onChange={e=>formHandle(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password'
            value={user.password}
            onChange={e=>formHandle(e)}
          />
        </div>
        <div>
          <label htmlFor="exampleInputEmail1">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='phone'
            value={user.phone}
            onChange={e=>formHandle(e)}
          />
        </div>
        <div>
          <label htmlFor="exampleInputEmail1">State</label>
          <select className="form-control" name='state' value={user.state} onChange={e=>formHandle(e)}>
            <option></option>
            <option value="Andhra Pradesh"> Andhra Pradesh </option>
            <option value="Assam"> Assam </option>
            <option value="Arunachal Pradesh"> Arunachal Pradesh </option>
            <option value="Bihar"> Bihar </option>
            <option value="Jharkhand"> Jharkhand </option>
            <option value="Maharashtra"> Maharashtra </option>
            <option value="Kerala"> Kerala </option>
            <option value="J&K"> J&K </option>
            <option value="Haryana"> Haryana </option>
            <option value="Karnataka"> Karnataka </option>
            <option value="Mizoram"> Mizoram </option>
            <option value="Nagaland"> Nagaland </option>
            <option value="Punjab"> Punjab </option>
            <option value="Sikkim"> Sikkim </option>
            <option value="Tamil Nadu"> Tamil Nadu </option>
            <option value="WestBengal"> WestBengal </option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-success" style={{ margin: 'auto', width: '350px' }}>
            Edit User
          </button>
        </div>
      </form>

    </div>
  )
}
