import { Send } from "@material-ui/icons";
import { Button, Container, Description, Input, InputContainer, Title } from "./style";

export function NewSletter() {
  return (
    <Container>
      <Title>Promoções</Title>
      <Description>Receba as nossas promoções diretamente no seu E-mail</Description>
      <InputContainer>
        <Input placeholder="Digite o seu E-mail"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}