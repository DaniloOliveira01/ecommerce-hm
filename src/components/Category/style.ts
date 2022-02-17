import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", alignItems: "center", justifyContent: "center" })}
`;

