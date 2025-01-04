import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const UserDataContext=createContext()
const UserContext = ({children}) => {
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        role:""
    })
  return (
    <div>
      <UserDataContext.Provider value={{user,setuser}}>
          {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
