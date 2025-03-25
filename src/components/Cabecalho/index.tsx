import styled from 'styled-components'

const Cabecalho = () => (
  <HeaderStyled>
    <h1>EBAC Jobs</h1>
  </HeaderStyled>
)

const HeaderStyled = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

export default Cabecalho
