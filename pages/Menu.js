<ContCircular flex={0.15}
        direcao="row"
        bgCor={cor.cinza_claro}
        bdTopLeft="0"
        bdTopRight="0"
        bdBottomLeft="35"
        bdBottomRight="35"
      >
        <Container
          flex={0.7}
          direcao="column"
          justify="center"
          align="flex-start"
        >
          <TextoPreto tamFonte="24" style={{ marginLeft: 20 }}>
            Perfil
          </TextoPreto>
        </Container>
        <Container flex={0.3} direcao="row" align="center">
          <Container
            flex={1}
            direcao="row"
            align="flex-end"
            justify="space-evenly"
          >
            <FontAwesome5 name="home" size={24} color="black" />
            <FontAwesome5 name="ellipsis-v" size={24} color="black" />
          </Container>
        </Container>
      </ContCircular>