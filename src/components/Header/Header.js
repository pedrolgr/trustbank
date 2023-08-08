import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight, HeaderTitle, HeaderText, InputWrapper, HeaderInput, HeaderInputButton } from './HeaderStyles'

function HeaderStyles() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderTitle>
          The best bank account for developers.
        </HeaderTitle>
        <HeaderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin convallis vulputate venenatis.
        </HeaderText>
        <InputWrapper>
          <HeaderInput placeholder='Enter your email adress'/>
          <HeaderInputButton title={"Get Free Bank Account"} />
        </InputWrapper>
      </HeaderLeft>
      <HeaderRight />
    </HeaderContainer>
  )
}

export default HeaderStyles