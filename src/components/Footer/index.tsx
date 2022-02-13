import { GitHub, Instagram, LinkedIn, MailOutline, Phone, Room } from "@material-ui/icons";
import { 
   Center,
   Container,
   Left, 
   Logo, 
   Description, 
   SocialContainer, 
   SocialIcon, 
   Right, 
   Title,
   List,
   ListItem,
   ContactItem,
   PayMent} from "./style";

export function Footer() {
  return (
    <Container>
      <Left>
        <Logo>H.M</Logo>
        <Description>Siga-nos nas redes sociais!</Description>
        <SocialContainer>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
          <SocialIcon>
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Importantes</Title>
        <List>
          <ListItem>Página Inicial</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/>
          Rua São João, Júpiter - Espaço
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/>
          +55 (99) 99999-9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/>
          contato@hm.com
        </ContactItem>
        <PayMent src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}