import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';
import { Theme } from '@matheuschignolli/example.providers.theme';

interface ButtonProps extends MuiButtonProps {
  children: ReactNode
}

export const Button = ({
  children,
  className,
  color = "primary",
  disableElevation = true,
  startIcon,
  variant = "contained"
}: ButtonProps) => {
  return (
    <Theme>
      <MuiButton
        className={className}
        color={color}
        disableElevation={disableElevation}
        startIcon={startIcon}
        variant={variant}
      >
        {children}
      </MuiButton>
    </Theme>
  );
}
