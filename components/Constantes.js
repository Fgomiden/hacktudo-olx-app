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
     border-top-left-radius:${props => `${props.bdTopLeft}px`}; 
     border-top-right-radius:${props => `${props.bdTopRight}px`};
     border-bottom-left-radius:${props => `${props.bdBottomLeft}px`};
     border-bottom-right-radius:${props => `${props.bdBottomRight}px`};  
 `