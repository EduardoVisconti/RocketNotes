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

# Aula 20 - Propriedade (Ex: <Button *title*='...'; Title é uma prop.)
- Reaproveitar componentes mas deixando as propriedades delas flexíveis
- Quando for usar texto: "" & número: {}
- \/ Na hora de exportarmos a função Button(props) < recebe props para acessarmos a propriedade e quando quiser exibir o conteúdo de uma propriedade colocamos em chaves {props.title} V
- /\ {Desestruturar} Na hora de exportamos a função Button({title}) < recebe a propriedade de forma separada e quando quiser exibir o conteúdo da propriedade colocamos em chaves apenas {title}
- Propriedades Boolean não precisa passar true/false, apenas ela
- Quando estivermos passando a propriedade loading para uma função, colocamos como =false para caso não tenha sido informado será falso
- Rest Operator (...rest): Qualquer outra propriedade que não deixe explícito mas tenha sido informada no HTML, nos inserimos ele no componente
- disabled(prop. que desabilita o botão)={loading}: se o loading for verdadeira vai desabilitar e se for falso vai continuar habilitado
- If ternário: { loading ? 'Carregando...' : title }; Se for true mostra 'Carregando' se não o title