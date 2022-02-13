import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { NewSletter } from "../../components/Newsletter";
import { ProductsItem } from "../../components/ProductsItem";
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from "./style";

export function ProductsList() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Todos os Produtos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Produtos:</FilterText>
          <Select>
            <Option disabled selected>
              Cores Disponíveis:
            </Option>
            <Option>Cinza Grey</Option>
            <Option>Azul Marinho</Option>
            <Option>Preto Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamanho:
            </Option>
            <Option>GG</Option>
            <Option>G</Option>
            <Option>P</Option>
            <Option>PP</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Classificar Produtos:</FilterText>
          <Select>
          <Option>Mais novo</Option>
          <Option>Maior Preço</Option>
          <Option>Menor Preço</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsItem />
      <NewSletter />
      <Footer />
    </Container>
  )
}