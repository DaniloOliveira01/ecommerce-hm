import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D3D3D3;
  position: relative;
  box-shadow: 3px 4px 10px rgba(0,0,0,0.6);

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;


export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.7s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

