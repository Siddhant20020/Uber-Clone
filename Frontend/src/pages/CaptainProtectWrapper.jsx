import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainProtectWrapper = ({
  children
}) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.status === 200) {
        setCaptain(response.data.captain)
        setIsLoading(false)
      }
    })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
      })


  }, [token])


  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

// const CaptainProtectWrapper = ({
//   children
// }) => {
//   const token = localStorage.getItem('token')
//   const navigate = useNavigate()
//   const { user, setUser } = useContext(UserDataContext)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     if (!token) {
//       navigate('/login')
//     }

//     axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }).then(response => {
//       if (response.status === 200) {
//         setUser(response.data)
//         setIsLoading(false)
//       }
//     })
//       .catch(err => {
//         console.log(err)
//         localStorage.removeItem('token')
//         navigate('/login')
//       })
//   }, [token])

//   if (isLoading) {
//     return (
//       <div>Loading...</div>
//     )
//   }

//   return (
//     <>
//       {children}
//     </>
//   )
// }

export default CaptainProtectWrapper