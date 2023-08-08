import React from 'react'
import { StyledButton } from './ButtonStyles'

function Button(props) {
  return (
    <StyledButton> 
        {props.title}
    </StyledButton>
  )
}

export default Button