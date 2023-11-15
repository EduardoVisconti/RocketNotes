- ReactDOM: Biblioteca para manipular os elementos que fazem parte da DOM (Hierarquia, arvore de objetos que faz parte da página, body, header, spam, h1, etc.)

- .jsx: Sintaxe para criar interfaces/componentes com React (Cria conteúdo HTML)

- Nome da function tem que ser o mesmo nome da interface: Os dois tem que começar com letra maiúscula (Interface === Componente)

- Importação nomeada: precisa ter o mesmo nome para funcionar, bom para não termos erros (Temos que usar chaves({}) para importar)
- Importação Default: não precisar ter o mesmo nome se apenas buscarmos o arquivo certo

- Precisamos de um Fragment, podemos usar <> ou
<div> para estilização

- Um componente retorna apenas um elemento

- Para não ficar muito repetitivo o arq Details dentro da pasta Details, podemos mudar o arq para index e automaticamente já busca

# Aula 13
- Usamos o pré processador para criar estilização e o pré processador vai gerar o CSS final que é o que vamos utilizar para colocar o site em produção
- Por que? Facilita a manutenção do nosso código, ajuda escrever mais limpa, reutilizar melhor os nossos códigos css (separar em arq, importações), possibilita a minificação de arquivos
- Elementos aninhados (html > body > div > h1) impacta na performance, ficam mais lentos, CSS não consegue evitar
- CSS-in-JS: aproveitam métodos atuais de componentização em JS para criar componentes performáticos a prova de colisão, extremamente automatizado

- Styled Components (Escrever CSS dentro de JS): melhorar a maneira que lidamos com CSS nos componentes de aplicações JS/React

Vantagens Styled Components:

Sem colisão de classes: fornece nomes de classes a prova de colisão

Desempenho: Funciona diretamente nos componentes, analisa facilmente quais códigos serão ou não usados, inclusive os que são adicionados após interação do usuário. Ajuda a diminuir a código final.

Estilo dinâmico: permite adaptar os estilos baseando nas props recebidas, é possível criar estilos dinâmicos de forma fácil e intuitiva

Manutenção sem dor: Tudo que você precisa vai estar no próprio contexto do componente, facilitando encontrar tudo o que você precisa para o desenvolvimento.

Boas práticas: Você escreve seu CSS no melhor padrão do mercado e pronto, os componentes cuidam para fornecer suporte para browsers antigos.

# Aula 14 - Container
- O que foi feito: Mudamos o arquivo css para js > Importamos o styled do styled-components > Já exportando a variável 'Container' como styled.div >> No index, importamos o Container de styles.js > Invés de div agora usamos <Container>

# Aula 16 - Styles
- Quando você exporta algo como uma exportação padrão (export default), você deve importá-lo sem chaves

# Aula 17 - Arrow Function - Jeito curto de escrever funções
- Função anônima = não tem nome
- Úteis para funções pequenas e simples
- Executado automaticamente

# Aula 18 - Estilização CSS
- Deixar as fontes mais suaves -webkit-font-smoothing: antialiased

# Aula 19 - Componentes
- No React podemos fazer a utilização da componentização, que nos ajuda em produtividades, facilita a manutenção e reaproveitar códigos. Cada componente é uma peça de lego que podemos aproveitar e encaixar em vários lugares. Otimiza tempo e tempo pois no nosso design temos o mesmo design para vários botões por exemplo, nesse caso usamos um botão para fazer a componentização e reaproveitar em diversas telas

# Aula 20 - Propriedade (Ex: <Button _title_='...'; Title é uma prop.)

- Reaproveitar componentes mas deixando as propriedades delas flexíveis
- Quando for usar texto: "" & número: {}
- \/ Na hora de exportarmos a função Button(props) < recebe props para acessarmos a propriedade e quando quiser exibir o conteúdo de uma propriedade colocamos em chaves {props.title} V
- /\ {Desestruturar} Na hora de exportamos a função Button({title}) < recebe a propriedade de forma separada e quando quiser exibir o conteúdo da propriedade colocamos em chaves apenas {title}
- Propriedades Boolean não precisa passar true/false, apenas ela
- Quando estivermos passando a propriedade loading para uma função, colocamos como =false para caso não tenha sido informado será falso
- Rest Operator (...rest): Qualquer outra propriedade que não deixe explícito mas tenha sido informada no HTML, nos inserimos ele no componente
- disabled(prop. que desabilita o botão)={loading}: se o loading for verdadeira vai desabilitar e se for falso vai continuar habilitado
- If ternário: { loading ? 'Carregando...' : title }; Se for true mostra 'Carregando' se não o title

---

# Aula 02 - Componente Header
- Details > index > Apagar todo o conteúdo e deixar apenas um botão
* Criar pasta Header > Index.jsx e styles.js
- styles.js > Importar styled do styled comp.
* Exportar Container = styled.header
* grid area header: Para fixar no topo
* Altura 105px e largura 100%
* Borda de baixo: largura 1px, solida e cor bg700
* display flex e justifica conteúdo com espaço entre eles: cada um em um canto
* Padding lateral de 80px
- Index.js > Importar o Container} de estilo
* Exportar a função Header e lembrar do return e Container > Deixar vazio
- Importar Header no index do Details e colocar dentro do Container
- Details styles `` > botar display grid V
* template de grid row, 105px primeira fileira depois auto
* template grid de area "header" & "content"
* Largura 100% e altura 100vh

# Aula 03 - Fotos
- Header > index.jsx > Dentro do Container criar um componente <Profile> e no import junto com o Container adicionar o profile
* Adicionar img com link da minha foto do github (http://github.com/perfil.png), usar o alt
* Criar div com span com a mensagem de Bem-vindo, em strong escrever meu nome
- Styles do Header > exportar const profile = styled.div
* display flex e alinhar itens ao centro
* - > img { = garantir estilizar apenas a img do profile
* Largura e altura de 56 com borda arredondada 50%
* - > div { = mudar as direções do texto
* display flex e a direção em coluna
* margin esquerda de 16px
* altura da linha 24px
* - dentro da div estilizar o span { > font size 14 e cor cinza
* - dentro da div estilizar o strong { > font size 18 e cor branca

# Aula 04 - React Icons
- npm install react-icons --save (Procurar icons: react-icons.github.io/react-icons)
- Header > Index > Import { RiShutDownLine } from 'react-icons/ri'
* Criar componente Logout e dentro por o ícone <> Importar junto com profile
- Styles > exportar Logout estilo button
* Sem borda e bg
* - > svg { = cor cinza 100 e font size 36

# Aula 05 - Children
- Criar pasta section dentro de components
- index.jsx > Importar Container > Exportar função section recebendo ({ titulo, children }) > return e container > h2 com {title} > {children abaixo}
- styles > importar e exportar com styled.section > margem 56 0 28
* - > h2 { borda de baixo: largura 1px, estilo sólida e cor bg700
* Padding abaixo de 16 e margem abaixo de 24
* Cor cinza 100
* Fonte tamanho 20 e peso 400
- Details > Index > Importar o componente section
* No Container colocar abaixo do header passando títulos = Links úteis > Passar UL com 3 Li's
_-_ Como passamos o children na outra, ele captura tudo que tem dentro da Section e aí repassa depois do H2
- Details > style > Criar componente pra nossa lista > Exportar Links styled.ul
* Tirar estilo de lista
* - > li { margem no topo de 12
* Cor do link (a) branca
- Details > Index > Adicionar link junto com o container
* Trocar UL por Links
* Dentro da li criar um link com a = Pegar os links no Figma

# Aula 06 - Tags
- Criar pasta Tag com index e style dentro
- Styles > Importar styled e exportar container styled.span
* fonte size 12
* padding 5 14
* arredondar borda pra 5
* Margem direita pra 6
* Cor bg900
* Bg cor laranja
- Index > Importar container exportar função Tag e passar o título para cada tag ter seu título
* Dentro do return colocar container com { title }
- Details > index > Criar outra section que recebe title = marcadores agora onde vamos colocar as tags
* Importar tag e utilizar dentro da section marcadores
* Criar duas <tag> e colocar pra cada Tag: título express e nodejs

# Aula 07 - ButtonText
- Criar componente ButtonText com style e index
- Styles > Importar styled e exportar container = styled.button
* Sem bg e borda
* Cor laranja e letra 16px
- Index > Importar e exportar ButtonText, com a propriedade título e o restante...
* return > Container do tipo botão e passar o restante de propriedade > e dentro do título
- Details > Index > Importar o botão e colocar ele de baixo do header > Com a propriedade title = excluir nota

# Aula 08 - Finalizar Details & Scroll Interface
- Details > Index > Depois do header criar elemento Main e componente content, colocar o fechamento delas abaixo do button, acima do fechamento do container
* Importar o content de dentro do estilo
- No Style > Dentro do Container acessar a > main e colocar grid area conteúdo
* Ativar scroll do overflow y, padding 64 cima e baixo
- Exportar o content styled.div
* Largura max de 550
* Margin 0 e auto
---------------
* Display flex, flex direção coluna
  _-_ Caso ainda não esteja centralizado, verificar o grid area header e content se falta ';'
- Details > Index > Abaixo do ButtonText adicionar o h1 e p com lorem
- Details > Style > Conteúdo V
* > button primeira criança > alinhar self end
* > h1 > fonte 36, peso 500, padding top 64
* > p fonte 16, margem acima 16, alinhamento texto justificado
  > _-_ Verificar scroll. Main ta pegando toda a largura. Conteúdo para deficiente uma largura máxima permitida para ficar no centro.
- Section > Styles > No container troar o margem para 28 0

# Aula 09 - Página Home
- Criar pasta Home > Index e Styles
- Index > Importar Container, Brand, Menu, Search, Content, NewNote
* Importar Header
* Exportar Home > Colocar <Brand> com h1
* Abaixo colocar > Header/ > <Menu> > <Search> > <Content> > <NewNote>
- Styles > Importar style > Exportar todos os elemento = styled.div / menu > ul / NewNote = button
- Container > largura 100%
* Altura 100vh
* Display grid
* Grid temp colunas: 250 (parte da esquerda, brand, menu, etc) auto
* Grid temp linhas: 105 128 auto 64
* Grid temp area> "brand header" > "menu search" > "menu content" > "new note content"
* Bg bg800
- Para cada elemento, adicionar o grid area correto de cada e colocar cores diferentes de bg para visualizarmos o conteúdo e como está posicionado
- MainJS > Trocar tudo do Details para Home = Para ver o conteúdo

# Aula 10 - Logo tipo / Brand
* Home > Styles > Na parte do Brand
- Posicionar no grid area
- display flex, conteúdo justificado centro e alinhar itens no centro
- borda de baixo: largura 1px, sólida e cor bg700
- bg bg900
- > h1, fonte 24px e cor laranja

# Aula 11 - Filtros / Menu
* Home > Index > importar o ButtonText e colocar os botões em volta dos LI's com título "Todos", criar 3 com título react e node
* ButtonText > Index > Passar a propriedade isActive = false e passar também para o Container
* ButtonText > Styles > Fazer uma condição
- Na cor passamos o isActive, e na arrow function colocar : isActive ? theme...orange : theme...gray100
* Home > Index > Ativar o botão todos

# Aula 12 - Botão criar nota (Como vamos fazer apenas não precisamos de componente, apenas usamos componente quando reutilizamos)
* Home > Index > Importar ícone FiPlus de dentro do react-icons/fi
- Dentro do NewNote colocamos a Tag do ícone e com o texto "Criar nota"
* Styles > NewNote
- bg laranja
- remover borda
- display flex, alinhar itens e justificar conteúdo ao centro
- Dentro do svg * > margem direita 8 

# Aula 13 - Inputs
* Criar a pasta com os dois arquivos de sempre
* Styles > Importar styled
- exportar Container sendo div
* Index > Importar Container
- Exportar input com a propriedade icon: Icons (para usarmos a propriedade com I maiúsculo) e restante
- Dentro do container, como vamos fazer uma comparação colocamos a tag Icons em {}: Icons && <Icons size={20} == Se existe o ícone eu mostro ele, caso ao contrário não
- Em baixo na tag input passar { ...rest
* Style > largura 100%
- display flex, alinhas itens centro
- bg bg900
- cor gray300
- margem baixo 8
- arredondar cantos 10
- * Apenas no Input >
- altura 56
- largura 100%
- padding 12
- cor branca
- bg transparente
- sem borda
- * place holder: &:placeholder { > cor gray 300
- > svg : margem esquerda 16
* Home > Index > Importar input e usar a tag dentro do search e passar pra ele a propriedade placeholder como;. Pesquisar pelo título
* Home > Styles > search > padding 64 64

# Aula 14 - Componente de Notas (Componente = se repete)
* Pasta Note > Index e style
* Index > Importar o Container e Tag > Exportar Note e como vamos receber bastante propriedade vamos criar um objeto data, e todo o ...resto
- Passar o { rest pro container
- h1 > {data.title
- Agora dentro {} vamos ter um data.tags (onde vamos renderizar as tags se elas existirem) && colocar a tag <footer>
- Dentro do footer pegar o { data.tags.map(tag=> { (percorrer cada tag)
- -E agora dentro da index da Tag, exportar o restante junto com o título e adicionar ...restante no Container também
*-* Jeito diferente V
- --E para cada tag vamos ter um <span com a chave key={tag.id} e tag.name > = quando temos uma lista temos que indicar que cada item é único e fazer isso através das chaves
- --Percorrer cada <Tag> com a chave tag id e título tag name
* Styles > Importar styled, exportar container estilo botão
- Largura 100%
- Bg bg700
- Remover bordas e arredondar 10px
- Padding 22
- Margem baixo 16
- > h1 > flex 1 (Ocupar o maior espaço disponível para ele)
- Alinhar na esquerda
- Peso da fonte 700
- Tamanho fonte 24
- Cor white
- > footer
- Ocupar 100%
- Display flex
- Margem top 24px
* Agora vamos usar ela dentro da nossa página > Importar seção e usar dentro do Container com o título Minhas notas
- Importar o Note e passar objeto data 17:16