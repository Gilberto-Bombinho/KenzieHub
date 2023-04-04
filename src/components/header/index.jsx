import { StyledHeader } from './style.js'
import { useNavigate } from 'react-router-dom'
import KenzieLogo from '../../assets/KenzieHub.svg'

export function HeaderComponent (){

  const navigate = useNavigate()

  function logout (){
    localStorage.clear()
    navigate('/')
  }

  return (
    
    <StyledHeader>
      <img src={KenzieLogo} alt='logo' />
      <button onClick={()=> logout()}> Voltar</button>
      </StyledHeader>
  )
}