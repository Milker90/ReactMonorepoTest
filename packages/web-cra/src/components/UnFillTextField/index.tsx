import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

interface IUnFillTextFieldProps {
  className?: string
}

const UnFillTextField = (props: TextFieldProps | IUnFillTextFieldProps) => {
  const { className, ...inputTextProps } = props
  return (
    <form className={className} autoComplete="off" noValidate>
      <TextField {...inputTextProps} />
    </form>
  )
}

export default UnFillTextField
