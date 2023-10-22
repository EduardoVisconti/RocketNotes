1. Criar com o terminal > cd 'pasta' > npm create vite@latest > cd 'nome da pasta criada' > npm install >>> Depois exec o projeto 'npm run dev'

2. Apagar: App.cs, favicon.svg, index.css, logo.svg (Nesse caso, pasta public, app.css e index.css) > E dentro da main.jsx excluir os arquivos importados e na index tirar favicon

4. (Aula 14) npm install --save styled-components e dentro da pasta Details > style.js temos que importar styled do styled-components & Criar o index.jsx > Importar o container

5. (15) Criar pasta styles > theme.js (Onde vai ficar o style GERAL) e colocar o token de cor
- No main.jsx > Importar o ThemeProvider e adicionar a tag com theme={theme} envolvendo o <Details>

6. (16) Dentro de styles criar o global.js > Estilização (global) de todas as páginas
- Importar o createGlobalStyle de styled components e exportar default createGlobalStyle `` >
- Resetar estilização global (*)
- Mudar fundo do body > ${({ theme }) => theme.COLORS.BACKGROUND_800} e mudar a letra pra branco
- Tirar decoração de texto dos links
- Botão & a: mudar cursor para pointer e botar transição filter de 0.2s. E no :hover botar filter de brilho de 0.9
- Importar estilização global no main.jsx e colocar dentro do ThemeProvider acima de details para ter acesso aos temas, etc

7. (18) Adicionar fontes e editar body, input, button e textarea
- Adicionar fonte no HTML
- CSS: Adicionar fonte no body, input, button e textarea
- Robot Slab, serif, 16px, sem outline
- Deixar as fontes mais suaves = No body: -webkit-font-smoothing: antialiased

8. (19) Criar em src > componentes > button > index.jsx e styles.js
* Dentro de styles.js > Importar styled de styled-components e exportar const Container com o nome styled.button
- Alterar cor do fundo (Orange) e da letra (BG800) 
- Ocupar 100% da largura e 56px de altura
- Tirar a borda e curva arredondada 10px
- Padding com espaçamento lateral de 16px
- Margin top de 16px
- Peso da fonte de 500 (Tamanho mediano)
- Pra quando botão tiver desativado: &:disabled: { opacidade: 0.5 }
* No index.jsx > Importar Container da pasta styles > exportar a função Button() > Com a função return () criar um <Container do tipo botão>Clique aqui<>
* No Details > index.jsx = Importar componente { Button } da pasta components/Button e dentro do Container chamar o componente <Button /> para então criamos na página