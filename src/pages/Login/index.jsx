import Logo from '../../assets/KenzieHub.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { StyledLogin } from './style.js'
import "react-toastify/dist/ReactToastify.css";
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'


export function Login() {

  const navigate = useNavigate()

  const {loginRequest, log, setLog} = useContext(UserContext)

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatória')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  return (
    <StyledLogin>
      <img src={Logo} alt='logo' />
      <form onSubmit={handleSubmit(loginRequest)}>
        <h2>Login</h2>
        <p>Email</p>
        <input type='email' {...register('email')} />
        <p>Senha</p>
        <input type='password' {...register('password')} />
        <br />
        <button>Entrar</button>
        <p className='form_footer'>Ainda não possui uma conta?</p>
        <Link className='register' to={'/register'}>
          Cadastre-se
        </Link>
      </form>
    </StyledLogin>
  )
}
