import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: scroll;

    padding: 64px 0;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;
`
