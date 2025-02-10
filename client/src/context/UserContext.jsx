import React, { useState } from 'react'
import { createContext } from 'react'
        import { Toaster } from "@/components/ui/sonner"

export const userDataContext = createContext()


function UserContext({children}) {
    const [user,setUser] = useState(null)


  return (
    <userDataContext.Provider value={{user,setUser}}>
        {children}
        <Toaster/>
    </userDataContext.Provider>
  )
}

export default UserContext