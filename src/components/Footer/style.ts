import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.footer`
  display: flex;
  color: #fff;
  ${mobile({ flexDirection: "column"})}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const Description = styled.p`
  margin: 1.3rem 0;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.5rem;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({})}
`;

export const ContactItem = styled.div`
  margin-bottom: 1.3rem;
  display: flex;
  align-items: center;
`;

export const PayMent = styled.img`
  width: 50%;
`;