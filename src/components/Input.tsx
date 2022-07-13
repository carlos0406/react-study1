import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  error?: FieldError|null|undefined
}

const InputComponent:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error = null, ...rest }:InputProps) => {
  return (
  <>
    <input {...rest}/>
    {!!error && <p>{error.message}</p>}
  </>
  )
}

export const Input = forwardRef(InputComponent)
