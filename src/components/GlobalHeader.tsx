import React, { FC, memo } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const GlobalHeader: FC = () => (
  <Container>
    <img src={logo} />
    <Branding>Planned Test</Branding>
  </Container>
);

const Container = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
`;

const Branding = styled.div`
  font-size: small;
  font-weight: 900;
  margin: 16px;
`;

export default memo(GlobalHeader);
