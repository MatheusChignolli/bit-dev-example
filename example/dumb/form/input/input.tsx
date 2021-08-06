import React, { ReactNode } from 'react';
import { 
  Input as MuiInput,
  InputProps as MuiInputsProps,
  OutlinedInput,
  FilledInput,
  FormControl
} from '@material-ui/core';
import { Typography } from '@matheuschignolli/example.dumb.typography'
import { InputLabelStyled } from './styles'

const inputs = {
  outlined: OutlinedInput,
  filled: FilledInput,
  standard: MuiInput
}

export interface InputProps extends MuiInputsProps {
  variant?:
  | 'standard'
  | 'outlined'
  | 'filled'
  labelColor?: string
  children?:
  | string
  | number
}

export const Input = ({
  children,
  color,
  fullWidth,
  id,
  labelColor,
  variant,
  ...props
}: InputProps) => {
  const DefaultInput = inputs[variant]

  return (
    <FormControl
      color={color}
      fullWidth={fullWidth}
      variant={variant}
    >
      {children && <InputLabelStyled
        color={color}
        htmlFor={id}
        variant={variant}
        labelColor={labelColor}
      >
        <Typography variant="button">
          {children}
        </Typography>
      </InputLabelStyled>}
      <DefaultInput
        color={color}
        fullWidth={fullWidth}
        {...props}
      />
    </FormControl>
  );
}

Input.defaultProps = {
  fullWidth: true,
  variant: 'standard',
  labelColor: '#fff',
  color: 'primary'
}
