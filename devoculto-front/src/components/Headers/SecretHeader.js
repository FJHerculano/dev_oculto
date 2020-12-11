import styled from 'styled-components'

import ImageContainer from '../Containers/ImageContainer'
import Logo from '../Logo'
import NameEmailForm from '../NameEmailForm'

const Container = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme })=> theme.colors.light};
`

const DivForm = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0 ;
`
export default function SecretHeader (){
  return (
    <ImageContainer>
      <Container>
      <Logo/>
      <p>Você foi convidado a participar do amigo secreto!</p>
      </Container>
      <DivForm>
        <NameEmailForm
        buttonText="participar"/>
      </DivForm>
    </ImageContainer>
  )
}