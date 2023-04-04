import { useState, useEffect, useContext } from 'react'
import { StyledDashboard } from './style.js'
import Logo from '../../assets/KenzieHub.svg'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components/modal'
import { UserContext } from '../../providers/UserContext'
import { ModalUpdate } from '../../components/modal-update'

export function Dashboard() {
  const {
    user,
    techRemove,
    techUpdate,
    tech,
    openModal,
    setOpenModal,
    openModalUpdate,
    setOpenModalUpdate
  } = useContext(UserContext)

  const navigate = useNavigate()


  const [selectedTech, setSelectedTech] = useState('')

  function logout() {
    localStorage.clear()
    navigate('/')
  }

  function selectTech(tech) {
    setSelectedTech(tech)
    setOpenModalUpdate(true)
  }

  return (
    <StyledDashboard>
      <header>
        <img src={Logo} alt="logo" />
        <button onClick={() => logout()}> Sair</button>
      </header>
      <div>
        <h1> Olá, {user.name} </h1>
        <h2> {`${user.course_module}`} (Introdução ao Frontend)</h2>
      </div>
      <div className="tecnologys">
        <h1 className="tecnology_title"> Tecnologias</h1>{' '}
        <button onClick={() => setOpenModal(true)} className="tech_add">
          +
        </button>
      </div>
      <section>
        {user.techs &&
          user.techs.map(tech => (
            <span
              key={tech.id}
              className="card_tecnology"
              onClick={() => selectTech(tech)}
            >

              <p className="tech_title"> {tech.title} </p>
              <p className="tech_status"> {tech.status} </p>
            </span>
          ))}
      </section>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      <ModalUpdate
        isOpen={openModalUpdate}
        selectedTech={selectedTech}
        setModalOpenUpdate={() => setOpenModalUpdate(!openModalUpdate)}
      />
    </StyledDashboard>
  )
}
