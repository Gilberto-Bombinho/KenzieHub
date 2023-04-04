import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechnologyContext } from '../../providers/TechnologyContext'
import { StyledFormUpdate } from './style.js'

export function ModalUpdate({ isOpen, setModalOpenUpdate, selectedTech}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { /*title: selectedTech.title*/ status:selectedTech.status}
  })

  const { techRegister, techRemove, techUpdate } = useContext(TechnologyContext)

  function formUpdate(formData){
    techUpdate(formData, selectedTech.id)
  }

  if (isOpen) {
    return (
      <StyledFormUpdate>
        <section className="modal_container">
          <form className="register_form" onSubmit={handleSubmit(formUpdate)}>
            <div className="div_title">
              <p className="modal_title">Tecnologia Detalhes</p>
              <button type='button' className="modal_close" onClick={setModalOpenUpdate}>
                X
              </button>
            </div>
            <p>Nome do projeto</p>
            <p> {techRegister.title} </p>
            <p>Selecionar Status</p>
            <select name="" id="" {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <div className='buttons_update'>
              <button className="button_save" type="submit">
                Salvar Alterações
              </button>
              
              <button type='button' onClick={() => techRemove(selectedTech.id)} className="button_delete">
                Excluir
              </button>
            </div>
          </form>
        </section>
      </StyledFormUpdate>
    )
  }
  return null
}


