import { Container } from "./style";
import { productsPopular } from "../../data";
import { Products } from "../Products/Products";

export function ProductsItem() {
  return (
    <Container>
      {productsPopular.map(item => (
        <Products item={item} key={item.id}/>
      ))}
    </Container>
  )
}