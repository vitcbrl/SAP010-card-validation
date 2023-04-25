import validator from "./validator.js";

document.getElementById("test").addEventListener("click", checkCardNumber);
function checkCardNumber() {
  const cardNumber = document.getElementById("card-number").value;
  if (validator.isValid(cardNumber)) {
    const lastFourDigits = cardNumber.substring(cardNumber.length - 4);
    const maskedValue = validator.maskify(cardNumber);
    alert(
      "O número de cartão de crédito é válido.\nÚltimos 4 dígitos: " +
        lastFourDigits +
        "\nValor mascarado: " +
        maskedValue
    );
  } else {
    alert("O número de cartão de crédito é inválido.");
  }
}

console.log(validator);
