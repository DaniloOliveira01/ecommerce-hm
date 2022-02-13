import { ButtonInfo, Container, Image, Info, Title } from "./style";

interface CategoryItemProps {
  item: {
    img: string;
    title: string;
  }
}

export function CategoryItem(props: CategoryItemProps) {
  return (
    <Container>
      <Image src={props.item.img}/>
      <Info>
        <Title>{props.item.title}</Title>
        <ButtonInfo>CONFIRA!</ButtonInfo>
      </Info>
    </Container>
  )
}