import styled from 'styled-components/native'

export const Container =styled.View`
    display:flex;
    flex: ${props => props.flex};
    flex-direction:${props => `${props.direcao}`};
    align-items:${props => `${props.align}`};
    justify-content:${props => `${props.justify}`};
    background-color: ${props => `${props.bgCor}`};
`

 export const ContCircular = styled(Container)`
    border-radius: 35px 35px 0px 0px;
 `