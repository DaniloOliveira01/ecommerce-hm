import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.div`
  color: #000;
`;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ width: "75%"})}
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.typeof === "filled" && "none"};
  background-color: ${(props) => props.typeof === "filled" ? "black" : "transparent"};
  color: ${(props) => props.typeof === "filled" && "white"};


${mobile({ margin: "0 12px"})}
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none"})}
`;

export const TopText = styled.span`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: #333;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  ${mobile({ flexDirection: "column"})}
`;

export const ProductsDetails = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

export const ItemName = styled.span``;

export const ItemId = styled.span``;

export const ItemColor = styled.div`
  width:30px;
  height: 30px;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const ItemSize = styled.span``;

export const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmountQuant = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px"})}
`;

export const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  ${mobile({ marginBotton: "20px"})}
`;

export const Hr = styled.hr`
  background-color: #000;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #333;
  border-radius: 5px;
  padding: 20px;
  height: 50vh;
  color: #000;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.typeof === "total" && "500"};
  font-size: ${props => props.typeof === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #e2e2e2;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
    background-color: #000;
    color: #e2e2e2;
  }
`;