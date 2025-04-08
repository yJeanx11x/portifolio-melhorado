//Cotação de moedas do dia
const USD = 5.86;
const EUR = 6.23;
const GBP = 7.41;

//Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

//Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//Função para converter a moeda

function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formtCurrencyBRL(price)} `;

    // Calcula o total.
    const total =amount * price
    //Verifica se o resultado não é um número.
    if(isNaN(total)){
      return alert('Por favor, digite o valor corretamente para converter.')
    }

  

    // Exibir o resultado total.
    result.textContent = `R$ ${String(total.toLocaleString('pr-BR').replace('.',","))} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resiltado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer ocultando ele da tela.
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

// Formata a moeda em Real Brasileiro.
function formtCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formata no padrão BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
