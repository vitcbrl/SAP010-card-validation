const validator = {
  maskify() {
    /*maskify é a function que esconder meus digitos e mostrar o mue alert, ela ta no meu button de onclick no meu index.html*/
    var numbercard = document.getElementById("cartao").value;
    /*linha que pego o valor do meu input text atraves do id*/
    var result = isValid(numbercard);
    /*linha que meu resultado vai armazenar meu algoritmo de luhn e aplicar ele no meu input text*/
    var hidden = "**** *****" + numbercard.slice(-4);
    /*linha que minha variavel recebe uma string de ** e concateno com o meu valor de input text e uso o metodo .slice() -> 
    
    ah dois metodos prototype.slice() o primero é o String.prototype.slice() que foi o utilizado aqui pois o valor da minha variavel é string
    -> esse metodo extrai uma parte de uma string e retorna como uma nova string sem modificar a string original.
    Exemplo: const str = 'The quick brown fox jumps over the lazy dog.';
    console.log(str.slice(31));Expected output: "the lazy dog." esse metodo conta os espaços tambem

    -> o segundo é o Array.prototype.slice()
    esse metodo retorna uma copia de um array criando entre inicio e fim. o inicio fica antes do . que nesse caso é o numbercard. quando colocado em negativo -, o metodo se inicia no final do array.*/
    alert(`Os ultimos quatro digitos do cartão é ${hidden} e ele é ${result}`);
  },

  isValid(creditCardNumber) {
    var soma = 0;
    var resto = 0;
    var tamanho = creditCardNumber.legth;
    var digito = parseInt(creditCardNumber[tamanho - 1]);
    for (var i = tamanho - 2; i >= 0; i -= 2) {}
  },
};

export default validator;
