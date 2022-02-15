import { Agreement, Button, Container, Form, Input, Logo, Title, Wrapper } from "./style";

export function Register() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Logo>H.M</Logo>
          <Title>Crie uma conta</Title>
          <Input placeholder="Nome"/>
          <Input placeholder="Sobrenome"/>
          <Input placeholder="Username"/>
          <Input placeholder="Digite seu E-mail"/>
          <Input placeholder="Digite sua senha"/>
          <Input placeholder="Confirme sua senha"/>
          <Agreement>
            Ao aceitar, você concorda com nossos <strong>Termos de uso.</strong>
          </Agreement>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}