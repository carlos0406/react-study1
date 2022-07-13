
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormContent } from '../../styles/pages/createUser'
import { Input } from '../../components/Input'
interface CreateUserFormData{

}

const createUserFormSchema = yup.object().shape({
  username: yup.string().required('Username Obrigatório'),
  nome: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('E-mail obrigatorio').email('E-mail Invalido'),
  telefone: yup.string().required('Telefone obrigatorio'),
  password: yup
    .string()
    .required('Senha Obrigatória')
    .min(6, 'a senha precisa te pelo menos 6 caracteres')

})

export default function CreateUser () {
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async data => {
    console.log(data)
  }
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(createUserFormSchema) })
  return (
   <FormContent>
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <Input type="text" {...register('nome')} placeholder="Nome" error={formState.errors?.nome}/>
      <Input type="text" {...register('username')} placeholder="Username"/>
      <Input type="text" {...register('email')} placeholder="email"/>
      <Input type="text" {...register('telefone')} placeholder="telefone"/>
      <Input type="password" {...register('password')} placeholder="senha"/>
      <button type="submit">Submeter</button>
    </form>
   </FormContent>
  )
}
