import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => `${props.direcao}`};
  align-items: ${(props) => `${props.align}`};
  justify-content: ${(props) => `${props.justify}`};
  background-color: ${(props) => `${props.bgCor}`};
`;

export const ContCircularCima = styled(Container)`
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
export const ContCircularBaixo = styled(Container)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
`;
