import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    state: ''
  })

  const [error, setError] = useState({})

  const validation = () => {
    let error = {}
    if (!user.name) {
      error.name = '**Please enter your name'
    }
    if (!user.email) {
      error.email = '**Please enter your email'
    }
    if (!user.password) {
      error.password = '**Please enter your password'
    }
    if (!user.phone) {
      error.phone = '**Please enter your phone number'
    }
    if (!user.state) {
      error.state = '**Please enter your state'
    }
    return error;
  }

  const navigate = useNavigate()

  const formHandle = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })

    if (name === 'name') {
      if (value.length === 0) {
        setError({ ...error, name: '**Name is required' })
        setUser({ ...user, name: '' })
      } else {
        setError({ ...error, name: '' })
        setUser({ ...user, name: value })
      }
    }
    if (name === 'email') {
      if (value.length === 0) {
        setError({ ...error, email: '**Email is required' })
        setUser({ ...user, email: '' })
      } else {
        setError({ ...error, email: '' })
        setUser({ ...user, email: value })
      }
    }
    if (name === 'password') {
      if (value.length === 0) {
        setError({ ...error, password: '**password is required' })
        setUser({ ...user, password: '' })
      } else {
        setError({ ...error, password: '' })
        setUser({ ...user, password: value })
      }
    }
    if (name === 'phone') {
      if (value.length === 0) {
        setError({ ...error, phone: '**Phone number is required' })
        setUser({ ...user, phone: '' })
      } else {
        setError({ ...error, phone: '' })
        setUser({ ...user, phone: value })
      }
    }
    if (name === 'state') {
      if (value.length === 0) {
        setError({ ...error, state: '**State is required' })
        setUser({ ...user, state: '' })
      } else {
        setError({ ...error, state: '' })
        setUser({ ...user, state: value })
      }
    }
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    let errorList = validation()
    console.log(user)
    setError(validation())
    if (Object.keys(errorList).length === 0) {
      await axios.post('http://localhost:3002/users', user)
      navigate('/alluser', alert('submitted'))
    }
  }
  return (
    <div style={{ backgroundColor: 'lightblue', margin: '100px 100px 0px 1000px', borderRadius: '20px' }}>
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
            onChange={formHandle}
          />
          <span style={{ color: 'red' }}>{error.name}</span>
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
            onChange={formHandle}
          />
          <span style={{ color: 'red' }}>{error.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password'
            value={user.password}
            onChange={formHandle}
          />
          <span style={{ color: 'red' }}>{error.password}</span>
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
            onChange={formHandle}
          />
          <span style={{ color: 'red' }}>{error.phone}</span>
        </div>
        <div>
          <label htmlFor="exampleInputEmail1"  >State</label>
          <select className="form-control" name='state' value={user.state} onChange={formHandle}>
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
          <span style={{ color: 'red' }}>{error.state}</span>
        </div>
        <br></br>
        <div>
          <button type="submit" className="btn btn-primary" style={{ marginBottom: '10px', width: '350px' }}>
            Add User
          </button>
        </div>
      </form>

    </div>
  )
}
