import React, { createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const captainDataContext = createContext()

// export const useCaptain = () =>{
//     const context = useContext(captainDataContext)
//     if(!context){
//         throw new Error("useCaptain must be used within a captainDataContextc ")
//     }
//     return context
// }



function CaptainContext({children}) {
    const [captain ,setCaptain] = useState(null)
    const [isLoading , setLoading] = useState(false)
    const [error,setError] = useState(null)

    const updateCaptain =(captainData) =>{
        setCaptain(captainData)
    }

  return (
    <captainDataContext.Provider value={{captain,setCaptain,isLoading,setLoading,error,setError,updateCaptain}}>{children}</captainDataContext.Provider>
  )
}

export default CaptainContext