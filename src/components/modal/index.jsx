import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../providers/UserContext'
import { StyledForm } from './style.js'
import { TechnologyContext } from '../../providers/TechnologyContext'

export function Modal({ isOpen, setModalOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { techRegister } = useContext(TechnologyContext)

  if (isOpen) {
    return (
      <StyledForm>
        <section className="modal_container">
          <form className="register_form" onSubmit={handleSubmit(techRegister)}>
            <div className="div_title">
              <p className="modal_title">Cadastrar Tecnologia</p>
              <button className="modal_close" onClick={setModalOpen}>
                X
              </button>
            </div>
            <p>Nome</p>
            <input
              type="text"
              {...register('title')}
              placeholder="Tecnologia"
            />
            <p>Selecionar Status</p>
            <select name="" id="" {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button className="modal_register" type="submit">
              Cadastrar Tecnologia
            </button>
          </form>
        </section>
      </StyledForm>
    )
  }
  return null
}
