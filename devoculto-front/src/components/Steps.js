import styled from 'styled-components'
import StepCard from './StepCard'

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;

  @media (max-width: 500px){
    flex-direction: column;
  }
`
const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export default function Steps(){
  return (
    <>
      <H1> Como funciona? </H1>
      <Container>
      <StepCard
          title = "1. Crie seu sorteio"
          description = "Digite seu nome e e-mail, e crie o seu sorteio de forma fácil e sem complicações."
        />
        <StepCard
          title = "2. Compartilhe o link "
          description = "Compartilhando o link com seus amigos para que todos participem do amigo secreto."
        />
         <StepCard
        title = "3. Sorteie! "
        description = "Quando todos seus amigos estiverem cadastrados, realize o sorteio e um email chegara para cada um com o nome da pessoa que tirou."
      />
      </Container>
    </>
  )
}