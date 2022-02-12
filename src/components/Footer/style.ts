import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #333;
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
  color: #333;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
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
`;

export const ContactItem = styled.div`
  margin-bottom: 1.3rem;
  display: flex;
  align-items: center;
`;

export const PayMent = styled.img`
  width: 50%;
`;