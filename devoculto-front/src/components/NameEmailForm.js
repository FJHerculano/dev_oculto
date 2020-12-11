import styled from 'styled-components'
import Input from './Input'
import Button from './Button'

const Form = styled.form `
  flex:1;
  display:flex;
  max-width: 900px;
  padding:20px;

  @media (max-width:500px){
    flex-direction: column;
  }

  >input, button {
    margin: 10px;
  }
`

function NameEmailForm ({buttonText}){
  return (
    <Form>
      <Input
      placeholder = "seu nome"
      required
      />
      <Input
      type = "email"
      placeholder = "seu email"
      required
      />

  <Button> { buttonText } </Button>

    </Form>
  )
}

NameEmailForm.defaultProps = {
  buttonText: "criar"
}

export default NameEmailForm
