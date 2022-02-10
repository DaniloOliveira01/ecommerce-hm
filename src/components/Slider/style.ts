import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #E2E2E2;
  position: relative;
  overflow: hidden;
`;

interface SetLeftRight {
  direction: string;
}

export const Arrow = styled.div<SetLeftRight>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

interface SlidesProps {
  slides: number;
}

export const Wrapper = styled.div<SlidesProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slides * -100}vw);
`;

interface ColorBg {
  bg: string;
}

export const Slide = styled.div<ColorBg>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg}
`;

export const Image = styled.img`
  height: 80%;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const ButtonInfo = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: rgba(0,0,0,0.4);
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #333;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.4);

  &:hover {
    opacity: 0.8;
    transition: 0.9s
  }
`;