import styled from "styled-components";


export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;

`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  font-weight: 400;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;

`;

export const FilterSizeOption = styled.option`
  background-color: #333;
  color: #fff;
  border: 1px solid #333;
  outline: none;
`;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const ButtonADdCart = styled.button`
  padding: 15px;
  border: 2px solid #333;
  background-color: #e2e2e3;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #333;
    color: #fff;
    transition: all 0.4s ease;
  }
`;