import { Badge } from "@material-ui/core";
import { SearchRounded, ShoppingCart } from "@material-ui/icons";
import { Center, Container, Left, Right, Wrapper, MenuItem, Cart } from "./style";

export function Navbar() {
  return (
    <Container>
      <Wrapper>
          <Left>
              <input type="text" placeholder="Search"/>
              <SearchRounded style={{color:"#fff", fontSize:"30px ", cursor:"pointer"}} />
          </Left>
          <Center>
            <h1>H.M</h1>
          </Center>
          <Right>
            <MenuItem>Registrar</MenuItem>
            <MenuItem>Entrar</MenuItem>
            <Cart>
              <Badge 
              badgeContent={3} 
              color="primary"
              >
                <ShoppingCart />
              </Badge>
            </Cart>
          </Right>
      </Wrapper>
    </Container>
  )
}