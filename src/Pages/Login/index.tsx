import { Button, Container, Form, Input, Link, Logo, Title, Wrapper } from "./style";

export function Login() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Logo>H.M</Logo>
          <Title>Login</Title>
          <Input type="text" placeholder="Username"/>
          <Input type="password" placeholder="Senha"/>
          <Link href="#">Esqueceu a senha?</Link>
          <Link href="#">Não tem uma conta?</Link>
          <Button>Entrar</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}