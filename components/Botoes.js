import styled from 'styled-components/native'

export const Botao =styled.TouchableOpacity`
    border-radius: 10px;
    width:${props => `${props.largura}px`};
    height:${props => `${props.altura}px`};
    justify-content: center;
    align-items: center;
`
export const BotaoCinza = styled(Botao)`
    background:${props => props.theme.cinza_claro};
`
export const BotaoLaranja = styled(Botao)`
    background:${props => props.theme.laranja};
`
