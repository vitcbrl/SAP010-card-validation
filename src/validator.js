const validator = {
  isValid: function (creditCardNumber) {
    // Remove todos os espaços em branco da entrada do usuário
    creditCardNumber = creditCardNumber.replace(/\s/g, "");

    // Usando uma expressão regex verifico se o valor tem apenas números(dentro da minha condição estou testando se consiste em apenas digitos o-9)e se não contem nenhum outro caractere como letras ou simbolos. esse ! é um não então estou dizendo que se não consistir em apenas numeros épra retornar false
    if (!/^\d+$/.test(creditCardNumber)) {
      return false;
    }

    // Inverte os números do valor
    const reversed = creditCardNumber.split("").reverse().join("");

    // Soma os dígitos nas posições ímpares
    let sum = 0;
    for (let i = 0; i < reversed.length; i++) {
      let digit = parseInt(reversed[i]);
      //O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
      if (i % 2 !== 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }

    // O número é válido se a soma dos dígitos é múltiplo de 10
    return sum % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    // Se o valor for menor ou igual a 4 caracteres, retorna ele mesmo
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    }

    // Substitui todos os caracteres, exceto os últimos 4, por #
    const maskLength = creditCardNumber.length - 4;
    let mask = "";
    for (let i = 0; i < maskLength; i++) {
      // Substitui por #
      mask += "#";
    }
    return mask + creditCardNumber.substring(maskLength);
    //esse metodo substring extrai caracteres entre indices (posições) de uma string e retorna uma substring
  },
};

export default validator;
