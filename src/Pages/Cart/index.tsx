import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Bottom, Container, Details, Image, Info, ItemColor, ItemId, ItemName, ItemSize, PriceDetail, Product, ProductAmount, ProductsDetails, Summary, Title, Top, TopButton, TopText, TopTexts, Wrapper, ProductAmountQuant, ProductPrice, Hr, SummaryTitle, SummaryItemText, SummaryItem, SummaryItemPrice, Button } from "./style";

import TenisImg from '../../assets/tenis.png'
import { Add, Remove, ShoppingBasket } from "@material-ui/icons";

export function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />
        <Wrapper>
          <Title>
            Seus Produtos <ShoppingBasket style={{fontSize: 20}}/>
          </Title>
          <Top>

            <TopButton typeof="filled">
              Continue Comprando!
            </TopButton>
            <TopTexts>
              <TopText>Bolsa de Compras (2)</TopText>
              <TopText>Lista de desejos (0)</TopText>
            </TopTexts>
            <TopButton>Voltar</TopButton>
          </Top>
          <Bottom>

            <Info>
              <Product>
              <ProductsDetails>
                <Image src={TenisImg}/>
                <Details>
                  <ItemName> <b>Produto:</b> Tênis Caminhada</ItemName>
                  <ItemId> <b>ID:</b> 3124324</ItemId>
                  <ItemColor color="#A9A9A9" />
                  <ItemSize> <b>Tamanho:</b> 42 </ItemSize>
                </Details>
              </ProductsDetails>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <ProductAmountQuant>2</ProductAmountQuant>
                  <Remove />
                </ProductAmount>
                <ProductPrice>Preço: R$ 99,99</ProductPrice>
              </PriceDetail>
              </Product>

              <Hr />

              <Product>
              <ProductsDetails>
                <Image src={TenisImg}/>
                <Details>
                  <ItemName> <b>Produto:</b> Tênis Caminhada</ItemName>
                  <ItemId> <b>ID:</b> 3124324</ItemId>
                  <ItemColor color="#A9A9A9" />
                  <ItemSize> <b>Tamanho:</b> 42 </ItemSize>
                </Details>
              </ProductsDetails>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <ProductAmountQuant>2</ProductAmountQuant>
                  <Remove />
                </ProductAmount>
                <ProductPrice>Preço: R$ 99,99</ProductPrice>
              </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>RESUMO DO PEDIDO:</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal:</SummaryItemText>
                <SummaryItemPrice>R$ 200,00</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Frete:</SummaryItemText>
                <SummaryItemPrice>R$ 45,60</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Desconto do Frete:</SummaryItemText>
                <SummaryItemPrice>R$ - 38,50</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem typeof="total">
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemPrice>R$ 245,60</SummaryItemPrice>
              </SummaryItem>

              <Button>Comprar</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}