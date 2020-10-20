import styled from 'styled-components/native'

export const Texto = styled.Text`
    font-size:${props => `${props.tamFonte}px`};
`
export const TextoCinza = styled(Texto)`
    color:${props => props.theme.cinza_claro};
`
export const TextoPreto = styled(Texto)`
    color:${props => props.theme.preto};
`
export const TextoBranco = styled(Texto)`
    color:${props => props.theme.branco};
`