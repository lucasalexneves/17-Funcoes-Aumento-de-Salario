/* Lista de exercícios - Aumento
Para realizar esse exercício vocês devem criar um novo projeto, iniciar um novo
repositório para ele e também criar um novo repositório no github!
1. Crie uma função que pergunte o nome e o salário de um
colaborador;
2. Depois crie uma função que irá calcular o aumento de salário
conforme a seguinte tabela:
ATÉ R$1.500,00 : aumento de 20%
R$1.501,00 até R$2.000,00 : aumento de 15%
R$2.001,00 até R$3.000,00 : aumento de 10%
R$3.001,00 em diante : aumento de 5%
Essa função tem que receber dois parâmetros: o salário e a %
de aumento. E retornar o valor do salário já com o aumento.
3. Depois de calcular o aumento você deve exibir: o nome do
colaborador, o salário, a % de aumento e o salário reajustado.
4. Crie uma função que pergunte se o usuário deseja calcular
novamente com novas informações.
Para calcular o aumento, faça o valor do salário multiplicado pela
porcentagem em decimal.
Ex.: salário R$1.000,00 aumento de 10%
1000 * 1.10 = 1100
salário R$1.000,00 aumento de 15%
1000 * 1.15 = 1150
ATENÇÃO!! Faça um commit para cada item do exercício. */

var nome = ""
var salary = 0
var salaryAjustado = 0
var continuar = "s"
var porcentagemSalario = ""

function AskName(){
    nome = prompt("Digite o nome do colaborador:")
    return nome
}

function AskSalary(){
    salary = parseFloat(prompt("Digite o salário do Colaborador:"))
    if(salary <= 1500){
        salaryAjustado = salary * 1.20
        porcentagemSalario = "20%"
    } else if (salary >= 1501 && salary <= 2000){
        salaryAjustado = salary * 1.15
        porcentagemSalario = "15%"
    } else if (salary >= 2001 && salary <= 3000){
        salaryAjustado = salary * 1.10
        porcentagemSalario = "10%"
    } else if (salary >= 3001){
        salaryAjustado = salary * 1.05
        porcentagemSalario = "5%"
    }

    return salary
}

function AskContinue(){
    continuar = prompt ("Deseja calcular novamente com novas funções? s ou n" )
    return continuar
}

while (continuar == "s"){
    AskName()
    AskSalary()
    AskContinue()

    console.log("O nome do colaborador é: ", nome, " e seu salário é: ", salary, ". O aumento de seu salário foi de: ", porcentagemSalario, " e seu salário reajustado foi: ", salaryAjustado)
}


