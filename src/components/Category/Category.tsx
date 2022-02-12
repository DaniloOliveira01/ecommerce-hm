import { Container } from "./style";
import { category } from "../../data";
import { CategoryItem } from "../CategoryItem/CategoryItem";

export function Category() {
  return (
    <Container>
      {category.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}