let nome = "Francisco";
let idade = 41;

console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");


// ___________________________________________


let nome = "Francisco";
let cidade = "Recife";

console.log(nome + " é de " + cidade + ".");


// ___________________________________________


let num_01 = 100;
let num_02 = 20;

let soma = num_01 + num_02;
let subtracao = num_01 - num_02;
let multiplicacao = num_01 * num_02;
let divisao = num_01 / num_02;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);


// ___________________________________________


let base = 20;
let altura = 10;

let area = (base * altura) / 2;

console.log("A área do triângulo é " + area);


// ___________________________________________


let nota_01 = 9;
let nota_02 =7;
let nota_03 = 8;

let media = (nota_01 + nota_02 + nota_03) / 3;

console.log("O resultado da média é " + media );


// ___________________________________________


let preco_Original = 200;
let percentual_Desconto = 10;

let valor_Desconto = (preco_Original * percentual_Desconto) / 100;
let preco_Final = preco_Original - valor_Desconto;

console.log("O preço original é R$ " + preco_Original + ", com um desconto de " + percentual_Desconto + "%, o preço final é R$ " + preco_Final);


// ___________________________________________


let salario_Bruto = 5000;
let imposto_De_Renda = 0;

if (salario_Bruto <= 1900) {
    imposto_De_Renda = 0;
} else if (salario_Bruto <= 2800) {
    imposto_De_Renda = salario_Bruto * 0.075;
} else if (salario_Bruto <= 3700) {
    imposto_De_Renda = salario_Bruto * 0.15;
} else {
    imposto_De_Renda = salario_Bruto * 0.225;
}

console.log("Seu salário bruto é: R$ " + salario_Bruto);
console.log("O valor do imposto de renda é: R$ " + imposto_De_Renda);
console.log("Seu salário líquido após o desconto do imposto de renda é: R$ " + (salario_Bruto - imposto_De_Renda));


// ___________________________________________


let valor_Inicial = 100;
let taxa_De_Cambio = 5;

let valor_Final = (valor_Inicial * taxa_De_Cambio);

console.log("O valor de " + valor_Inicial + " unidades da moeda inicial é equivalente a R$ " + valor_Final + " na moeda final.");


// ___________________________________________


let temp_Celsius = 20;

let temp_Fahrenheit = (temp_Celsius * 9/5) + 32;

console.log(temp_Celsius + " graus Celsius é igual a " + temp_Fahrenheit.toFixed(2) + " graus Fahrenheit.");


// ___________________________________________


let peso = 80;
let altura = 1.80;

let imc = peso / (altura * altura);

console.log("O IMC é: " + imc.toFixed(2));


// ___________________________________________