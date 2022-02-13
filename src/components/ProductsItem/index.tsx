import { Container } from "./style";
import { productsPopular } from "../../services/data";
import { Products } from "../Products";

export function ProductsItem() {
  return (
    <Container>
      {productsPopular.map(item => (
        <Products item={item} key={item.id}/>
      ))}
    </Container>
  )
}