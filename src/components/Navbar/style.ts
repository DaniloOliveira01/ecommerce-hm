import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333;

  input {
  width: 470px;
  font-size: 16px;
  padding: 0.20rem;
  outline: none;
  border: none;
}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;

  h1 {
    font-weight: bold;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuItem = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;


