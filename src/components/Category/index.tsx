import { Container } from "./style";
import { category } from "../../services/data";
import { CategoryItem } from "../CategoryItem";

export function Category() {
  return (
    <Container>
      {category.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}