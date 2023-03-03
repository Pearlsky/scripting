// Map out user stories for a currency converter and build out the conversion functionality

/* User Stories

- user should be able to select to and fro currency options
- user should be able to convert from one currency amt to another
- user should be able to swap conversions

*/

/*
State:

amountFrom
currencyFrom

amountTo
currencyTo

rate.
*/
let curencyrate;
let currencyFrom;
let currencyTo;

function convert(amount, rate) {
  return Number(amount) * Number(rate);
}

function getRate(currencyFrom, currencyTo) {
  (async () => {
    const response = await fetch(
      `https://rest.coinapi.io/v1/exchangerate/${currencyFrom}/${currencyTo}`,
      {
        method: "GET",
        headers: { "X-CoinAPI-Key": "CFA97BA1-59A9-40E4-8FFD-C3542E4CE9AB" },
      }
    );
    const data = await response.json();
    const { rate } = data;
    currencyRate = rate;
  })();
}

// function amountCurrencyHandler(e) {
//   currencyFrom = e.target.value;
//   rate = getRate(currencyFrom, currencyTo);
// }

function amountCurrencyHandler(e) {
  currencyRate = getRate(currencyFrom, currencyTo);
}

// function convertedToCurrencyHandler(e) {
//   currencyTo = e.target.value;
//   rate = getRate(currencyFrom, currencyTo);
// }

function convertedToCurrencyHandler(e) {
  currencyRate = getRate(currencyFrom, currencyTo);
}

getRate("EUR", "GBP");
