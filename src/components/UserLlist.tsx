import React, { FC } from 'react'
import { IUser } from '../types/Types'
import UserItem from './UserItem'


interface UserListProps{
    users: IUser[]
}
const UserLlist: FC<UserListProps> = ({users}) => {
    
  return (
    <div>
        {/* {users.map(item => (
            <UserItem key={item?.id} user={item}/>
        ))} */}
    </div>
  )
}

export default UserLlist