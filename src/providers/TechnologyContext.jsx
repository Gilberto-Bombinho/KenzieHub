import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'

export const TechnologyContext = createContext({})

export const TechnologyProvider = ({ children }) => {
  const {setOpenModal, user, setUser, openModalUpdate, setOpenModalUpdate} = useContext(UserContext)
  const navigate = useNavigate()
  const [log, setLog] = useState({})

  const techRegister = async formData => {
    try {
      const token = localStorage.getItem('@Token')
      const response = await api.post(`/users/techs`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setUser({ ...user, techs: [...user.techs, response.data] })
      toast.success('Tecnologia adicionada com sucesso')
      setOpenModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  const techRemove = async id => {
    try {
      const token = localStorage.getItem('@Token')
      await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const newTech = user.techs.filter(tec => tec.id !== id)
      setUser({ ...user, techs: newTech })
      setOpenModalUpdate(false)
    } catch (error) {
      console.error(error)
    }
  }

  const techUpdate = async (formData, id) => {
    try {
      const token = localStorage.getItem('@Token')
      const response = await api.put(`/users/techs/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const updatedTech = user.techs.map((tech)=>{
        if(tech.id === id){
          tech.status = formData.status
        } 
        return tech
      })
      setUser({ ...user, techs: updatedTech })
      setOpenModalUpdate(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TechnologyContext.Provider
      value={{
        user,
        techRegister,
        techRemove,
        techUpdate,
        openModalUpdate,
        setOpenModalUpdate
      }}
    >
      {children}
    </TechnologyContext.Provider>
  )
}
