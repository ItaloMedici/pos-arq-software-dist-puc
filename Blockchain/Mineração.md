
### Qual objetivo da mineração 

- Sistemas destralizados precisam de alguma forma de consenso para determinar o estado corrente váldo do sistema.
    
- O consenso é um mecanismo funcional em sistemas distribuídos e serve para proteger todo o sistema de compon entes que enviam informações inválidas.
    
- Informações inválidas podem ser originárias de componentes com mau funcionamento ou hackeados.
    
- A mineração é uma forma de consenso que garante a segurança às redes de blockchain que adotam algoritmos de prova de trabalho
    

### O processo de mineração no Bitcoin

- A mineração é uma corrida entre nós da rede para resolver um problema matemático usando força computacional
    
- O nó mais rápido a calcular a resposta correnta para o problema matemático ganha o direito de gravar um novo bloco na rede.
    
- O vencedor recebe como recompensa:
    
    - novos bitcoins que são gerados pelo protoco da rede
        
    - As taxas de transações pagas pelo usuário
        

### O problema matemático

- O hash de um bloco do bitcoin tem 256 bits e é calculado pelo algoritimo SHA-256.
    
- O hash é calculado tendo como entrada os dados de transações do bloco e campos de controle.
    
- O desafio imposto (problema matemático) consisten em encontrar um determinado campo de controle da entrada (conhecido como nounce) que irá fazer a saída da função hash começar com um determinado número de zeros.
    
- Como a função hash é uma função de excelente distribuição, mínimas variações na entrada produzem grandes variações no hash.
    
- Basicamente, encontrar a solução significa determinar um número inteiro para o campo nounce que produza um hash com as condições impostas
    

### A dificuldade do problema matemático

- A dificuldade do problema é ajustada pelo protocolo da rede para manter uma produção constante de blocos a cada 10 minutos
    
- A dificulda de do problema matemático no bitcoin é conhecida como hash rate.
    
- Se há muito poder computacional na rede, os mineradores tendem a resolver o problema matemático mais rapidamente.
    
- Se há menos poder computacional, o problema tende a ser resolvido com mais tempo.
    
- O ajuste da dificuldade é um fator importante para manter a taxa aproximada de um bloco a cada 10 minutos, o que é importante para a escalabilidade do bitcoin. 