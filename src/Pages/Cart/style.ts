import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
`;

export const Wrapper = styled.div`
  padding: 20px;
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
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #e2e2e2;
  color: #000;
  transition: all 0.4s ease;

  &:hover {
    background-color: rgba(0,0,0,0.5);
    color: #e2e2e2;
  }
`;

export const TopTexts = styled.div``;

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

`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
`;

export const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Hr = styled.hr`
  background-color: #000;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  font-size: 30px;
  font-weight: 600;
  color: #000;
`;