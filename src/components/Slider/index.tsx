import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Arrow, ButtonInfo, Container, Description, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from "./style";
import { useState } from "react";
import { SliderItems } from "../../services/data";
import { title } from "process";

export function Slider() {
  const [slides, setSlides] = useState(0);

  const handleClick = (direction: any) => {
    if(direction === "left") {
      setSlides(slides > 0 ? slides - 1 : 2);
    } else {
      setSlides(slides < 2 ? slides + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slides={slides}>
        {SliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <ButtonInfo>SAIBA MAIS!</ButtonInfo>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}