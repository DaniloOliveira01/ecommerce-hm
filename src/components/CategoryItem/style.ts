import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #333;
  margin: 3px;
  height: 70vh;
  box-shadow: 3px 3px 20px rgba(0,0,0,0.7);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #fff;
  border-radius: 8px;
  margin-bottom: 0.7rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  padding: 0.3rem;
  color: #000;
  text-shadow: 2px 3px 5px rgba(0,0,0,0.7);
  margin-bottom: 0.7rem;
`;

export const ButtonInfo = styled.button`
  background-color: #696969;
  color: #e2e2e2;
  width: 40%;
  height: 100%;
  padding: 0.7rem 0;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.9s;
  }
`;