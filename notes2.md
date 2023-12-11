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
- No data vamos passar { title: ‘React’, vetor> tags: [{id: ‘1’, name: ‘react’}, +1 desse

* Home > Styles > Na parte do Content
- padding 0 64
- over flow y: auto - habilitar scroll so quando n caber na tela ou deixar ‘scroll’ pra deixar fixo

# Aula 15 - Map: Estrutura de repetição, para cada item que existe dentro de uma lista ele vai percorrer / fazer alguma coisa
* tags.map(tag => / tags é a lista / tag é a variável que guarda de forma temporária o item que está sendo percorrido pelo map
* E para cada item que estamos percorrendo, estamos renderizando um componente chamado Tag e passando a key e o title
* <Tag
            key={tag.id}
            title={tag.name}

Porque Map e não forEach? Utilizam a mesma estrutura, e percorre itens da lista

Map retornou a coleção, ele é utilizando quando queremos manipular/alterar coleção = Usamos o map pq queremos um retorno do componente Tag formatado (com as info) para exibir
Cada componente precisa de uma key.

# Aula 16 - SignIn 
* dentro da pasta pages criar pasta SignIn com índex e style
* styles > importar styled component e exportar container styled div
- altura 100vh
- display flex
- alinha itens esticados 
* índex > importar container e form
- exportar função signin e retornar <Container
* Na main.jsx > importar o signin, trocar com o Details para aparecer a page > Na utilização também!!

# Aula 17 - Formulário SignIn
* índex.jsx > dentro do Container criar o elemento form > h1 rocket notes
- p > check canva
- h2
- importar o Input e utilizar ele embaixo do h2 >
- placeholder e-mail 
- tipo texto
- Importar ícones de LogIn, Mail, Lock
- icon={FiMail}
- ^^ Repetir para a senha, fazer as alterações necessárias
- Importar button
- Utilizar abaixo de tudo com title Entrar
- Criar um link com o texto Criar conta 
* styles > exportar Form styled form
- padding 0 136
- display flex , direção coluna, alinhar itens e justificar conteúdo ao centro
- texto centralizado 
- > h1 > fonte 48px, cor laranja
- > h2 > fonte 24 > margem top 84 e baixo 24
- > p > fonte 14, cor cinza 100
- > a > margem top 124, cor laranja

# Aula 18 - Utilizando imagens 
* Criar pasta assets e colocar a imagem lá 
* SignIn > Styles > Importar a imagem backgroundImg
- exportar um novo componente Background styled div (para encher toda a parte da tela)
- flex 1 para ocupar toda a parte
- colocar a imagem setando o background: através do url(${backgroundImg no-repeat centro centro 
- background size cover para ficar bem preenchida 
* Índex > Importar o bg junto com o form e adicionar abaixo do form o <Bg

# Aula 19 - Importação de Imagem 
* import userImg from "../../assets/eduardo.png";
- <img
    src={userImg}
    alt="Foto do usuário"
  />
* import backgroundImg from "../../assets/background.png";
- export const Background = styled.div `
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
  `

# Aula 20 - SignUp
* Copiar e colar a pasta SignIn e mudar para Signup a pasta e ppl nome da função dentro do índex
* main.jsx - Mudar a tela q está sendo exibida para SignUp - 3 lugares 
* SignUp > Index > pegar o bg do final e colocar no começo 
- trocar o h2 da forma correta (Cria sua conta
- adicionar/importar outro icon (FiUser) > adicionar outro input em primeiro para o Nome com ícone
- button title: Cadastra e o link do a : Voltar para o login
* Style > trocar as margens do h2 48 0, **** No do signIn também 

# Aula 21 - Profile
* main > trocar a página para Profile
* Pages > criar pasta Profile > index e style 
* styles > importar styled e exportar container styled div
- largura 100%
* índex > importar Container e exportar função Profile que retorna Container
- Importar FiArrowLeft
- Dentro do Container > criar um Header com um link (a) e dentro renderizar o Ícone ^
* styles > >header
- largura 100%
- altura 144
- bg bg900
- display flex e alinhar itens no centro
- padding 0 124
- svg { cor cinza 100 e fonte 24px
* índex > importar input, button e os ícones FiUser, mail, lock
- abaixo do header adicionar um formulário com 4 inputs, placeholder: nome email e senha atual/nova senha, type e icon adicionar corretamente (pensa q tá easy)
- Abaixo dos inputs adicionar o button com título Salvar 
* styles > exportar Form styled form
- max largura 340
- margem 30 auto 0 (¿subir um pouco form?)

# Aula 22 - Avatar do usuário 
* Profile > índex > adicionar a tag avatar em primeiro no form e dentro um img, pegar img do git user.png > importar o avatar junto com cont, form..
- criar um label abaixo utilizando htmlFor=avatar para vincular com o input 
- Importar o ícone FiCamera e colocar dentro do label 
- abaixo do ícone colocar um input id avatar e do type file 
* Styles > exportar avatar styled div
- posição relativa 
- margem -124 auto 32
- largura e altura 186
- também definir a mesma altura e largura para a >img e borda arredondada 50%
- > label > largura e altura 48
- bg laranja e arredondar 50%
- display flex, alinhar itens dentro, justificar conteúdo centro 
- posição absoluta, abaixo 7 e direta 7
- cursor pointer
- input { sem display
- svg { largura e altura 20px e cor bg800
* Na exportação da form acima, vamos colocar o espaçamento entre os inputs; “Pega pra mim a div, mas não qualquer div, quero a quarta div” > div:nth-child(4) > margem acima de 24

# Aula 23 - Interface New
* Criar pasta New, com os dois arq
- styles > importar styled e exporter container styled div
- largura 100-%
- altura 100vh
- display grid, template de linha, cabeceiro 105 e auto
- template áreas: cabecario conteúdo
* índex > importar header e container 
- exportar função New > return e container > tag header /> dentro 
* mainjs trocar a main page para ver como tá ficando 

# Aula 24 - Header New
* index > importar input e exportar junto com o Container
- abaixo da tag header criar um main com form e header
- dentro do header > h1 Criar nota & link com texto voltar
- abaixo do header > tag input com placeholder Título 
* styles > exportar variável Form styled form
- max largura 550
- margem 38 auto
- *(e pro header dentro dele) > header > display flex e alinhar itens dentro e justificar conteúdo cada um de um lado 
- margem de baixo 36
- (ainda do header) a { > fonte 20 e cor cinza100

# Aula 25 - text área 
* Componente para escrever mais linhas
* criar pasta TextArea e criar os dois arq
* Índex > importar container > exporter fun textarea e passar a propriedade valor e restante 😇
- passar pro Container o restante e dentro o {value}
* styles > importar styled, exportar container styled textarea
- ocupar 100% da onde ele estiver
- altura 150
- bg bg900
- cor white
- remover borda
- propriedade de resize none (o que permite a pessoa aumentar segurando e arrastando)
- margem baixo 8
- arredondamento borda 10
- padding 16
- &::placeholder { cor cinza300
* New > Index > importar o TextArea e usar embaixo do input passando a propriedade placeholder escrito observações 

# Aula 26 - Componente NoteItem
* Criar a pasta NoteItem com os dois arq
* Índex > Importar ícones FiPlus e FiX
- importar container
- exportar func NoteItem > passar as propriedades isNew (pra saber se é pra adc um novo item), value, onClick, …rest
- return > container isNew={isNew} (passando a propriedade da função pro container que vamos usar dentro do styled component)
- dentro do container > input do tipo texto, value={value}, readyOnly={!isNew} e passar restante 
- abaixo do input criar um button do tipo botão e onClick = onclick} e adc uma className = {isNew ? ‘button-add’ : ‘button-delete’
- dentro do botão > { se é novo ? renderizar o <FiPlus caso contrário : <FiX }
- Obs: meio que entendi o pq de passar as prioridades pra função e depois passar mas acho q temos q fazer umas pesquisar pra ser mais certeiro 

# Aula 27 - Estilizando o NoteItem
* styles > importar styled > exportar container styled div
- display flex, alinhas itens dentro
- bg condicional: bg {theme,  e passar a propriedade isNew }=> isNew ? “transparent” : ..bg900
- cor cinza300
- borda condicional: theme, isNew } => isNew ? ‘1px dashed {theme…cinza300}’ : “none”
- margem abaixo 8px
- arredondamento borda 10px
- padding direita 16
- * no botão q ta dentro > button: sem borda e sem bg
- * > input { 
- altura 56
- altura 100%
- padding 12
- cor branco
- bg transparent 
- remover borda
- &::place > cor cinza 300
* New > index > importar NoteItem e Section
- logo após o textarea criar um section c título Link úteis e passar dois NoteItem/> dentro, um com valor “site da rocket” e outro com isNew e placeholder “Novo link”
* NoteItem > styles > em baixo de >button criar o .button-delete com a cor vermelha e -add com a cor laranja 

# Aula 28 - Finalizando New
* New > index >  abaixo da seção de Links, criar outra seção com título Marcadores
- criar uma div com a classe Tags
- criar dois NoteItem dentro da div iguais da seção acima, primeiro com o valor “react” e o debaixo trocar o placeholder para Nova tag dentro 
* styles > dentro do Container abaixo de tudo por .tags { display flex, justificar conteúdo com espaço entre eles e o flex wrap wrap (se n couber na linha ele joga pra debaixo)
* Fixar cabeçalho >  acima do .tags colocar um > main { com grid area content e overflowy auto (para ativar só quando n caber)
* index > importar button > abaixo da última seção colocar a tag button com título Salvar 

# Aula 29 - Rotas (React Route DOM)
* instalar > npm install react-route-dom
* Dentro da pasta src criar a pasta routes > vamos ter dois tipos de rota > app.routes.jsx (rota da aplicação, usuário só pode acessar quando estiver ligado na aplicação) e as outras rotas de autenticação (login, cadastro. só pode acessar quando n estiver logado) 
- importar Routes, Route de ‘react-router-dom’ > Importar o componentes (páginas): New, Home, Details, Profile
- exportar função AppRoutes (){ > return( e dentro > componente <Routes> onde vai envolver todas as nossas rotas (<Route>)
- dentro de Routes > <Route path=“/” (endereço) (quero renderizar>) element={<Home />} />
- copiar mais 3 desse routes ^ e modificar para cada página > para cada endereço temos que usar o /page apenas o home que não pois já é padrão > para /details/:id temos que passar um id (e depois recuperamos o parâmetro passado pela rota)
* dentro da pasta routes criar o arq index.jsx > importar BrowserRouter de react router dom
- importar AppRoutes de app.routes
- exportar func Routes() > dentro do return > <BrowserRouter> <AppRoutes /> <BR/>
* no main js agora invés de passsarmos o nome da página específica vamos trocar por Routes e /routes e dentro globalstyle também (((((verificar funcionamento)))))
* copiar e colar o arq app.routes.jsx mas trocar para auth.routes e fazer essas alterações >
- manter apenas duas rotas > SignIn and SignUp > apenas o SignUp tem endereço /register
* routes > index > importar auth routes e trocar dentro do <Browser (((com essa mudança do vamos ter acesso às duas rotas de signin and signup

# Aula 30 - Navegação
* Pasta SignIn > índex > Importar componente Link de r r d
- no lugar da nossa tag a do criar nota vamos trocar para: <Link to=“/register”>
* SignUp > Fazer a mesma coisa que o SignIn só trocar o to=“/” (voltar para a raiz)
* routes > index > trocar a rotas para a da aplicação > AppRoutes dentro da tag browserrouter
* Home > Styles > Importar o Link de rrd 
- Na exportação do NewNote invés de styled.button agora vai ser styled{Link}
* Home > Index > na tag NewNote passar o to=“/new” e adicionar cor bg900
* New > Index > Importar o Link > No nosso header no <a> de voltar colocar Link to=“/“
* Header > Index > na tag Profile adicionar o to=“/profile”
* Header > Styled > Importar link > No profile invés de ser .div trocar por { Link }
* Profile > Index > Importar Link > No “a” do header trocar para Link to=/
* FAZER UM OVERVIEW DE TODOS OS BOTÕES — NO ROUTES > Index > TROCAR PARA O AUTHROUTES E FAZER OVERVIEW