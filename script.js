function exibirResultado(elementId, mensagem, isError = false) {
    const el = document.getElementById(elementId);
    el.innerText = mensagem;
    el.classList.remove('erro', 'sucesso'); 

    if (isError) {
        el.classList.add('erro');
    } else {
        el.classList.remove('erro'); 
    }
    el.style.display = 'block'; 
}

function verificarTriangulo() {
    const x = parseFloat(document.getElementById('ladoX').value);
    const y = parseFloat(document.getElementById('ladoY').value);
    const z = parseFloat(document.getElementById('ladoZ').value);
    let resultado = '';
    let erro = false;

    if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
        resultado = 'Por favor, insira valores numéricos positivos para os lados.';
        erro = true;
    } else if (x + y > z && x + z > y && y + z > x) {
        if (x === y && y === z) {
            resultado = 'É um triângulo Equilátero.';
        } else if (x === y || x === z || y === z) {
            resultado = 'É um triângulo Isósceles.';
        } else {
            resultado = 'É um triângulo Escaleno.';
        }
    } else {
        resultado = 'Os valores fornecidos não respeitam a desigualdade triangular. A soma de dois lados deve ser **maior** que o terceiro.';
        erro = true;
    }

    exibirResultado('resultadoTriangulo', resultado, erro);
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let resultado = '';
    let erro = false;

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado = 'Por favor, insira peso e altura válidos.';
        erro = true;
    } else {
        const imc = peso / (altura * altura);
        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = 'Obesidade grau 2';
        } else {
            classificacao = 'Obesidade grau 3';
        }
        resultado = `Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`;
    }
    exibirResultado('resultadoIMC', resultado, erro);
}

function calcularImpostoCarro() {
    const ano = parseInt(document.getElementById('anoCarro').value);
    const valor = parseFloat(document.getElementById('valorCarro').value);
    let resultado = '';
    let erro = false;

    if (isNaN(ano) || isNaN(valor) || ano <= 1885 || valor <= 0) {
        resultado = 'Por favor, insira ano (a partir de 1886) e valor válidos.';
        erro = true;
    } else {
        let taxa;
        if (ano < 1990) {
            taxa = 0.01;
        } else {
            taxa = 0.015;
        }
        const imposto = valor * taxa;
        resultado = `O imposto a ser pago é de R$ ${imposto.toFixed(2)}.`;
    }
    exibirResultado('resultadoImpostoCarro', resultado, erro);
}

function calcularAumentoSalario() {
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    const cargo = document.getElementById('cargo').value.trim();
    let resultado = '';
    let erro = false;

    if (isNaN(salarioAtual) || salarioAtual <= 0 || cargo === "") {
        resultado = 'Por favor, insira salário atual válido e o código do cargo.';
        erro = true;
    } else {
        let percentualAumento;
        switch (cargo) {
            case '101':
                percentualAumento = 0.10;
                break;
            case '102':
                percentualAumento = 0.20;
                break;
            case '103':
                percentualAumento = 0.30;
                break;
            default:
                percentualAumento = 0.40;
        }
        const aumento = salarioAtual * percentualAumento;
        const novoSalario = salarioAtual + aumento;
        resultado = `Salário Antigo: R$ ${salarioAtual.toFixed(2)}\nPercentual de Aumento: ${(percentualAumento * 100).toFixed(0)}%\nAumento: R$ ${aumento.toFixed(2)}\nNovo Salário: R$ ${novoSalario.toFixed(2)}\nDiferença: R$ ${aumento.toFixed(2)}`;
    }
    exibirResultado('resultadoAumentoSalario', resultado, erro);
}

function calcularCreditoEspecial() {
    const saldoMedio = parseFloat(document.getElementById('saldoMedio').value);
    let resultado = '';
    let erro = false;

    if (isNaN(saldoMedio) || saldoMedio < 0) {
        resultado = 'Por favor, insira um saldo médio válido (maior ou igual a zero).';
        erro = true;
    } else {
        let percentualCredito = 0; 
        let valorCredito = 0;

        if (saldoMedio >= 0 && saldoMedio <= 200) {
            percentualCredito = 0;
        } else if (saldoMedio >= 201 && saldoMedio <= 400) {
            percentualCredito = 0.20;
        } else if (saldoMedio >= 401 && saldoMedio <= 600) {
            percentualCredito = 0.30;
        } else if (saldoMedio > 600) {
            percentualCredito = 0.40;
        }
        
        if (percentualCredito > 0) {
            valorCredito = saldoMedio * percentualCredito;
        }

        resultado = `Saldo Médio Informado: R$ ${saldoMedio.toFixed(2)}\n`;
        if (valorCredito > 0) {
            resultado += `Percentual de Crédito Aplicado: ${(percentualCredito * 100).toFixed(0)}%\nValor do Crédito Concedido: R$ ${valorCredito.toFixed(2)}`;
        } else {
            resultado += "Nenhum crédito especial disponível para este saldo médio.";
        }
    }
    exibirResultado('resultadoCreditoEspecial', resultado, erro);
}

function calcularPedidoLanchonete() {
    const itemCodigo = document.getElementById('itemPedido').value;
    const quantidade = parseInt(document.getElementById('quantidadeItem').value);
    let resultado = '';
    let erro = false;
    let precoUnitario = 0;
    let nomeItem = '';

    if (isNaN(quantidade) || quantidade <= 0) {
        resultado = 'Por favor, insira uma quantidade válida (maior que zero).';
        erro = true;
    } else {
        switch (itemCodigo) {
            case '1': precoUnitario = 11.00; nomeItem = 'Cachorro Quente'; break;
            case '2': precoUnitario = 8.50; nomeItem = 'Bauru'; break;
            case '3': precoUnitario = 8.00; nomeItem = 'Misto Quente'; break;
            case '4': precoUnitario = 9.00; nomeItem = 'Hamburger'; break;
            case '5': precoUnitario = 10.00; nomeItem = 'Cheeseburger'; break;
            case '6': precoUnitario = 4.50; nomeItem = 'Refrigerante'; break;
            default:
                resultado = 'Código de item inválido.';
                erro = true;
        }
        if(erro && nomeItem === '') { 
        } else if (!erro) { 
            const valorTotal = precoUnitario * quantidade;
            resultado = `Item: ${nomeItem}\nQuantidade: ${quantidade}\nPreço Unitário: R$ ${precoUnitario.toFixed(2)}\nValor Total a Pagar: R$ ${valorTotal.toFixed(2)}`;
        }
    }
    exibirResultado('resultadoPedidoLanchonete', resultado, erro);
}

function calcularValorProduto() {
    const precoEtiqueta = parseFloat(document.getElementById('precoEtiqueta').value);
    const condicao = document.getElementById('condicaoPagamento').value;
    let resultado = '';
    let erro = false;
    let valorFinal = precoEtiqueta;

    if (isNaN(precoEtiqueta) || precoEtiqueta <= 0) {
        resultado = 'Por favor, insira um preço de etiqueta válido.';
        erro = true;
    } else {
        let descricaoCondicao = '';
        switch (condicao) {
            case 'a':
                valorFinal = precoEtiqueta * 0.90;
                descricaoCondicao = 'À vista em dinheiro ou cheque (10% de desconto)';
                break;
            case 'b':
                valorFinal = precoEtiqueta * 0.85;
                descricaoCondicao = 'À vista no cartão de crédito (15% de desconto)';
                break;
            case 'c':
                valorFinal = precoEtiqueta;
                descricaoCondicao = 'Em duas vezes sem juros';
                break;
            case 'd':
                valorFinal = precoEtiqueta * 1.10;
                descricaoCondicao = 'Em duas vezes com juros (10% de juros)';
                break;
            default:
                resultado = 'Condição de pagamento inválida.';
                erro = true;
        }
        
        if(!erro) { 
            resultado = `Preço de Etiqueta: R$ ${precoEtiqueta.toFixed(2)}\nCondição Escolhida: ${descricaoCondicao}\nValor Final a Pagar: R$ ${valorFinal.toFixed(2)}`;
             if (condicao === 'c' || condicao === 'd') {
                resultado += `\nValor da Parcela (2x): R$ ${(valorFinal / 2).toFixed(2)}`;
            }
        }
    }
    exibirResultado('resultadoValorProduto', resultado, erro);
}

function calcularSalarioProfessor() {
    const nivel = document.getElementById('nivelProfessor').value;
    const horas = parseFloat(document.getElementById('horasAula').value);
    let resultado = '';
    let erro = false;

    if (isNaN(horas) || horas <= 0) {
        resultado = 'Por favor, insira uma quantidade de horas/aula válida.';
        erro = true;
    } else {
        let valorHoraAula;
        let nomeNivel = '';
        switch (nivel) {
            case '1': valorHoraAula = 12.00; nomeNivel = 'Nível 1'; break;
            case '2': valorHoraAula = 17.00; nomeNivel = 'Nível 2'; break;
            case '3': valorHoraAula = 25.00; nomeNivel = 'Nível 3'; break;
            default:
                resultado = 'Nível de professor inválido.';
                erro = true;
        }

        if(!erro) { 
            const salario = valorHoraAula * horas * 4.5;
            resultado = `Professor ${nomeNivel}\nHoras/Aula Semanais: ${horas}\nValor Hora/Aula: R$ ${valorHoraAula.toFixed(2)}\nSalário Mensal Estimado: R$ ${salario.toFixed(2)}`;
        }
    }
    exibirResultado('resultadoSalarioProfessor', resultado, erro);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mostrarPiloto").addEventListener("click", function() {
        document.getElementById("pilotoBox").style.display = "block";
        document.getElementById("pilotoBox").scrollIntoView({ behavior: "smooth" });
    });
});