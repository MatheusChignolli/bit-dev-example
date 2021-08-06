import React, { FC } from 'react';
import { 
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps
} from '@material-ui/core'
import { Theme } from '@matheuschignolli/example.providers.theme'

export interface TypographyProps extends MuiTypographyProps {
  children: string
  color: 
  |'inherit'
  | 'initial'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'
  variant:
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'srOnly'
  | 'inherit'
}

export const Typography = ({ children, ...props }: TypographyProps) => {
  return (
    <Theme>
      <MuiTypography {...props}>
        {children}
      </MuiTypography>
    </Theme>
  );
}

Typography.defaultProps = {
  color: 'primary',
  variant: 'p'
}
