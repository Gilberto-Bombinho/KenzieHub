import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext'

export const ProtectedRoutes = () => {

  const {user} = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(()=>{
    if(user.length == 0){
      navigate('/')
    }
  },[])

return (
  <>
  {user? <Outlet/> : null}
  </>
)
}