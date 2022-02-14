import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { NewSletter } from "../../components/Newsletter";
import { AddContainer, Amount, AmountContainer, ButtonADdCart, Container, Description, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from "./style";

import TernoGreyImg from '../../assets/terno2.png'
import { Add, Remove } from "@material-ui/icons";

export function ProductUniq() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={TernoGreyImg}/>
        </ImgContainer>
        <InfoContainer>
          <Title>Terno</Title>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur illo inventore soluta perspiciatis ad eius architecto hic sunt possimus delectus eos qui cupiditate, mollitia modi, optio beatae placeat voluptas corrupti.
          </Description>
          <Price>R$ 159,99</Price>
          <FilterContainer>
            <Filter>
            <FilterTitle>
              Cores:
            </FilterTitle>
            <FilterColor color="#333"/>
            <FilterColor color="#111838"/>
            <FilterColor color="#000"/>
            </Filter>
            <Filter>
              <FilterTitle>Tamanho:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>GG</FilterSizeOption>
                <FilterSizeOption>G</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>P</FilterSizeOption>
                <FilterSizeOption>PP</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
                <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <ButtonADdCart>Adicionar ao Carrinho</ButtonADdCart>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewSletter />
      <Footer />
    </Container>
  )
}