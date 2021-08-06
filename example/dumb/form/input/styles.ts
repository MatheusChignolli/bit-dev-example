import styled, { css } from 'styled-components'
import { InputLabel } from '@material-ui/core';

export const InputLabelStyled = styled(InputLabel)`
    ${({ labelColor, variant }) => {
        console.log('variant', labelColor)
        return variant === 'outlined' && css`background: ${labelColor};`
    } }
`