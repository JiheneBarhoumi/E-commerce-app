
import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {Table,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import LoaderLogin from "../components/LoaderLogin";
import {listUsers} from '../actions/userActions'

const UserListScreen = () => {
    
    const dispatch=useDispatch()

    const userList=useSelector(state=>state.userList)
    const {loading,error,users}=userList

    useEffect(()=>{
        dispatch(listUsers())
    },[dispatch])

    return ( <>
            <h1>USERS</h1>
    {loading ? <LoaderLogin/>:error ? <Message variant='danger'>{error}</Message> :(
      <Table striped bordered hover responsive className='table-sm'>
          <thead>
              <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Admin</th>
                 
              </tr>
          </thead>
          <tbody>
              {users.map(user=><tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                      <td>
                          {user.isAdmin? (<i className='fas fa-check' style={{color:'green'}}></i>) : 
                          
                          (<i className='fas fa-times' style={{color:'red'}}></i>)
                          }
                      </td>
                  </tr>
              )}
          </tbody>
      </Table>
    )}
        </>
    )
}

export default UserListScreen
