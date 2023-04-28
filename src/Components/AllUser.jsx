import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AllUser() {
  const [user, setUser] = useState([])

  const getUser = async () => {
    const url = await axios.get('http://localhost:3002/users')
    setUser(url.data)
  }
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3002/users/${id}`)
    getUser()
  }

  useEffect(() => {
    getUser()
  }, [])

  // const{name,email,password,phone,state}=user;
  return (
    <div>
      <table className="table dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Password</th>
            <th scope="col">Phone Number</th>
            <th scope="col">State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value) => (
            <tr>
              <th scope="row">{value.id}</th>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>{value.phone}</td>
              <td>{value.state}</td>
              <td>
                <a href={`/edit/${value.id}`} className='btn btn-success'>Edit</a>
                <a onClick={() => deleteUser(value.id)} className='btn btn-danger'>Delete</a>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
