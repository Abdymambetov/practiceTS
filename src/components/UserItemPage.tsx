import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../types/Types'



const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)

    const {id} = useParams()
    useEffect(() => {
      fetchUser()
    }, [])
    const navigate = useNavigate();
    
    async function fetchUser() {
      try{
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.data
        setUser(data)
      } catch(e) {
        alert(e)
      }
    }
  return (
    <div>
        <button onClick={() => navigate("/users")}>back</button>
        <h1>Страница пользователя {user?.name}</h1>
        {user?.email}
        {user?.address?.city}
    </div>
  )
}

export default UserItemPage