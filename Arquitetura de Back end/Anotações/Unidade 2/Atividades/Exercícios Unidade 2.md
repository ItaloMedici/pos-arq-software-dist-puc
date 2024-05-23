#### 1. O que são os três componentes principais do padrão Model-View-Controller (MVC) e qual é a principal responsabilidade de cada um?

- Model: Contem as regras de negócio 
- Controller: Recebe as requisições, processa na camada model e responde a camada View
- View: Interface que transforma os dados em comunicação visual.

#### 2. Como o padrão Model-View-ViewModel (MVVM) melhora a separação de responsabilidades em relação ao padrão MVC?

Com a mudança da camada controller para view model, todas as requisições são realizadas na camada view e enviadas para view-model, onde é realizada a chamada via rede para a camada model. Como essa requisição acontece por rede, é possivel adicionar um cache na camada ViewModel para que evite chamar muitas vezes a camada model.

Resposta:
	No MVVM, o ViewModel é introduzido como um componente adicional para separar melhor a lógica de apresentação da interface do usuário. Isso permite que a View fique mais focada apenas na exibição e na interação do usuário, enquanto o ViewModel se concentra em lidar com a lógica de apresentação e o estado da View

#### 3. O que é Domain-Driven Design (DDD) e qual é o seu principal objetivo no desenvolvimento de software?

É a estruturação do código voltada as regras de negócio, onde conseguimos descrever com mais clareza as regras da aplicação junto com o time que produto.

Resposta:
	Abordagem de desenvolvimento de software que se concentra na modelagem do domínio do problema e no alinhamento do design do software com o conhecimento do negócio e a linguagem utilizada pelos especialistas do domínio. O principal objetivo do DDD é criar sistemas de software que reflitam o domínio do problema e facilitem a comunicação entre desenvolvedores  especialistas do domínio. 

#### 4. Qual é o objetivo principal da Arquitetura Limpa no contexto do desenvolvimento de software?

Organizar o código em camadas, para aprimorar a manutenibilidade de aplicação

Resposta:
	Criar sistemas escaláveis, flexíveis e fácil manutenção, por meio da organização do código e da separação de responsabilidades em camadas bem definidas e independentes.

#### 5. No padrão MVC, como os componentes Model, View e Controller se comunicam entre si para manter a consistência de dados e atualizações de interface do usuário?

A camada controller recebe as requisições do cliente, processa na camada model e encaminha para a camada View, que renderiza ao usuário uma informação visual.

Resposta:
	O Controller é responsável por receber e precessar eventos e requisições do usuário vindos da View. Ela atualiza o Model conforme necessário e, em seguida, atualiza a View para refletir as mudanças no Model. A View pode também observar o Model diretamente para receber atualizações quando os dados mudam.

#### 6. Descreva a principal diferença entre a abordagem do ViewModel no padrão MVVM e o Controller no padrão MVC.

ViewModel é responsável por realizar os caches e request via rede para a camada model, enquanto a camada Controller recebe as requests e consulta na camada model, sem a necessidade de rede.

Resposta:
	A ViewModel é responsável por lidar com a lógica de apresentação e o estado da View sen ter conhecimento direto da interface do usuário, enquanto o Controller no MVC gerencia a comunicação entre o Model e a View e processa as interações do usuário. Essa separação de responsabilidades permite uma maior facilidade de teste e reutilização de código no MVVM

#### 7. Quais são os principais componentes do Domain-Driven Design (DDD), e como eles contribuem para a modelagem eficiente de um domínio do problema?

- Aplicação: Camada que expõe a aplicação para uso, recendo as requisições
- Serviço: Processa as informações da aplicação na camada de Domínio e persiste na camada Infraestrutura
- Domínio: Responsável por conter toda a regra de negócio da aplicação
- Infraestrutura: Responsável pela camada técnica, mantendo o banco de dados, garantindo a segurança e outros quesitos técnicos.

Resposta:
	Os principais componentes do DDD incluem Entidades, Agregados, Objetos de Valor, Repositórios e Serviços de domínio. Esses componentes ajudam a criar uma modelagem de domínio rica e expressiva, facilitando a compreensão do problema e a comunicação entre desenvolvedores e especialistas do domínio. Por exemplo, entidades representam objetos com identidade única no domínio enquanto Objetos de valor são imutáveis e representam características ou atributos. Agrafos são conjuntos de entidades que são tratadas como uma única unidade para garantir consistência. Repositórios fornecem acesso e persistência aos agregados e Serviços de Domínio encapsulam lógicas que não se encaixam naturalmente em outras partes do modelo de domínio. 
#### 8. Explique a organização de camadas na Arquitetura Limpa e como isso promove a independência de componentes e a facilidade de manutenção.

As camadas dependem somente de sua camada interna e desconhecem sua camada externa, sendo a mais interna a camada de regra de negócio, dessa forma conseguimos ter uma garantia do reuso, caso alguma camada externa houver uma mudança conseguimos evitar a dependencias das outras.

Respostas:
- Entidades: Lógica de negócio
- Casos de Uso: Interação com a lógica de negócio
- AdaptadoresL Conversão de formatos
- Estruturas: Integração com o mundo externo (UI, DB e etc)

