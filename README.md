Variável "nomePrato1" foi criada com CONST porque é um nome fixo do prato, que não muda durante a operação de pedidos

Variável "precoPrato1" foi criada com CONST porque seu valor relativo ao prato também é fixo e não muda durante a operação de pedidos

Variável "valorPedido" foi criada com LET porque o valor final do pedido pode variar durante a operação de pedidos de acordo com quantidade e pratos que o cliente pede

A prática atual do javascript prioriza o uso de LET e CONST porque, apesar de a variável VAR fazer praticamente a mesma coisa que o LET, ela é mais antiga, portanto, para não haver confusão na hora do código, é melhor utilizar apenas um dos tipos para não deixar o código bagunçado, e o tipo escolhido foi o LET por ser mais recente e cumprir o mesmo papel do VAR.

Nome do Projeto: Corinthians Burguer
Tema: Lanchonete temática do Corinthians

A interface consiste em um navbar contendo o nome da marca, a fachada principal com o nome e lema da lanchonete, um aviso de desconto semanal de 10 reais, 3 cards com 3 produtos diferentes da loja e um botão de fazer pedido perto do topo da página, além de um pequeno footer avisando que você está na página principal

A condição do if e else consiste em ver se o pedido feito tem o valor igual ou maior do que 40 reais. Caso tenha, um desconto de 10 reais é aplicado no pedido final

Tive uma dificuldade ao configurar o if e else. O que aconteceu foi que o desconto não queria ser atribuído a variável final "pedido", mas o que estava acontecendo era que eu estava escrevendo apenas "pedido - descontoSemanal". Isso fazia com que o desconto fosse aplicado, mas não fosse registrado na variável pedido, então eu ajustei para "pedido = pedido - descontoSemanal" e o problema se resolveu.

