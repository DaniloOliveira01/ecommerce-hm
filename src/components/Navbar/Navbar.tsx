import { Badge } from "@material-ui/core";
import { SearchRounded, ShoppingCart } from "@material-ui/icons";
import { Center, Container, Left, Right, Wrapper, MenuItem } from "./style";

export function Navbar() {
  return (
    <Container>
      <Wrapper>
          <Left>
              <input type="text" placeholder="Search Products"/>
              <SearchRounded style={{color:"#fff", fontSize:"30px ", cursor:"pointer"}} />
          </Left>
          <Center>
            <h1>H.M</h1>
          </Center>
          <Right>
            <MenuItem>REGISTRE-SE</MenuItem>
            <MenuItem>Entrar</MenuItem>
            <MenuItem>
              <Badge badgeContent={0} 
              color="primary"
              >
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </Right>
      </Wrapper>
    </Container>
  )
}