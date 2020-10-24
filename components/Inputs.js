import styled from 'styled-components/native'

export const TextoInput = styled.TextInput`
    height:${props => `${props.altura}px`};
    width:100%;
    border-radius:10px;
`
export const TextoInputCinza = styled(TextoInput)`
    background-color:${props => props.theme.cinza};
`
export const TextoInputCinzaClaro = styled(TextoInput)`
    background-color:${props => props.theme.cinza_claro};
`
export const TextoInputLaranja = styled(TextoInput)`
    background-color:${props => props.theme.laranja_claro};
`