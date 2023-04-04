import Logo from '../../assets/KenzieHub.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { HeaderComponent } from '../../components/header'
import { StyledRegister } from './style.js'
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'

export function Register() {
  const navigate = useNavigate()

  const {loginRequest, userRegister,log, setLog} = useContext(UserContext)

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup
      .string()
      .matches(/[a-z]/, 'Deve ter pelo menos 1 letra minúscula')
      .matches(/(\d)/, 'Deve ter pelo menos 1 número')
      .matches(/(\W|_)/, 'Deve ter pelo menos 1 caracter especial')
      .matches(/.{8,}/, 'Deve ter pelo menos 8 caracteres')
      .required(
        'Senha deve conter ao menos uma letra, número e caractér especial'
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas deve ser iguais')
      .required('Confirmação de senha obrigatória'),
    bio: yup.string().required('Bio obrigatória'),
    contact: yup.string().required('Telefone obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const submitData = async data => {
  
}
  return (
    <StyledRegister>
      <HeaderComponent />
      <form onSubmit={handleSubmit(userRegister)}>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <p>Nome</p>
        <input type='text' {...register('name')} />
        <p>{errors.name?.message}</p>
        <p>Email</p>
        <input type='email' {...register('email')} />
        <p>{errors.email?.message}</p>
        <p>Senha</p>
        <input type='password' {...register('password')} />
        <p>{errors.password?.message}</p>
        <p>Confirmar senha</p>
        <input type='password' {...register('passwordConfirmation')} />
        <p>{errors.passwordConfirmation?.message}</p>
        <p>Bio</p>
        <input type='text' {...register('bio')} />
        <p>{errors.bio?.message}</p>
        <p>Contato</p>
        <input type='text' {...register('contact')} />
        <p>{errors.contact?.message}</p>
        <p>Selecionar módulo</p>
        <select {...register('course_module')}>
          <option value='Primeiro Módulo'>Primeiro Módulo</option>
          <option value='Segundo Módulo'>Segundo Módulo</option>
        </select>
        <br />
        <button type='submit'>Cadastrar</button>
      </form>
    </StyledRegister>
  )
}
