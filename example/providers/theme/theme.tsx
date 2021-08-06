import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'

interface ThemeProps {
  children?: ReactNode
  theme?: {
    palette: {
      primary: {
        main: string
        dark: string
        light: string
        contrastText: string
      },
      secondary: {
        main: string
        light: string
        contrastText: string
        dark: string
      }
    }
  }
}

export const Theme = ({ children, theme }: ThemeProps) => {
  const createdTheme = createTheme(theme)

  return (
    <MuiThemeProvider theme={createdTheme}>
      <StyledThemeProvider theme={createdTheme}>
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

Theme.defaultProps = {
  theme: {
    palette: {
      primary: {
        main: '#000C66',
        dark: '#050A30',
        light: '#7EC8E3',
        contrastText: '#FFF'
      },
      secondary: {
        main: '#59981A',
        dark: '#3D550C',
        light: '#81B622',
        contrastText: '#FFF'
      }
    }
  }
}