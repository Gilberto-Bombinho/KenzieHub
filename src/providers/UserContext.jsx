import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [log, setLog] = useState({})
  const [user, setUser] = useState([])
  const [tech, setTech] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [openModalUpdate, setOpenModalUpdate] = useState(false)


  async function loginRequest(data) {
    try {
      const response = await api.post('sessions', data)
      localStorage.setItem('@USERID', response.data.user.id)
      setUser(response.data.user)
      localStorage.setItem('@Token', response.data.token)
      toast.success('Usuário logado')
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      toast.error('E-mail ou senha incorretos')
    }
  }

  async function userRegister(data) {
    delete data.passwordConfirmation
    try {
      const response = await api.post('users', data)
      toast.success('Usuário registrado com sucesso')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@Token')
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(response.data)
          navigate('/dashboard')
        } catch (error) {
          console.error(error)
        } 
      }
      autoLogin()
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginRequest,
        log,
        setLog,
        tech,
        userRegister,
        openModal,
        setOpenModal,
        openModalUpdate,
        setOpenModalUpdate
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
