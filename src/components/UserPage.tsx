import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../types/Types'
import List from './List'
import UserItem from './UserItem'

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      const data = await response.data
      setUsers(data)
    } catch(e) {
      alert(e)
    }
  }
  const naviagte = useNavigate()
  return (
    <div> 
        <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => naviagte('/users/' + user?.id)} user={user} key={user.id}/>}/>
    </div>
  )
}

export default UserPage