import React, { useState } from 'react'
import { createContext } from 'vm'

export const userDataContext = createContext()


function UserContext({children}) {
    const [user,setUser] = useState({
        fullname:{
            firstname : '',
            lastname: ''
        },
        email :"",
        passowrd :""
    })


  return (
    <userDataContext.Provider value={[user,setUser]}>
        {children}
    </userDataContext.Provider>
  )
}

export default UserContext