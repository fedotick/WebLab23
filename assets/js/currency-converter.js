// 2024.04.17 22:22 by Google
let exchangeRate = {
    eur: {
        eur: 1,
        gbr: 0.86,
        mdl: 19.04,
        ron: 4.97,
        rub: 100.54,
        uah: 42.14,
        usd: 1.07
    }, 
    gbr: {
        eur: 1.17,
        gbr: 1,
        mdl: 22.23,
        ron: 5.81,
        rub: 117.20,
        uah: 49.19,
        usd: 1.24
    },
    mdl: {
        eur: 0.052,
        gbr: 0.045,
        mdl: 1,
        ron: 0.26,
        rub: 5.27,
        uah: 2.21,
        usd: 0.056
    },
    ron: {
        eur: 0.20,
        gbr: 0.17,
        mdl: 3.83,
        ron: 1,
        rub: 20.18,
        uah: 8.47,
        usd: 0.21
    },
    rub: {
        eur: 0.0099,
        gbr: 0.0085,
        mdl: 0.19,
        ron: 0.049,
        rub: 1,
        uah: 0.42,
        usd: 0.011
    },
    uah: {
        eur: 0.024,
        gbr: 0.020,
        mdl: 0.45,
        ron: 0.12,
        rub: 2.38,
        uah: 1,
        usd: 0.025
    },
    usd: {
        eur: 0.94,
        gbr: 0.80,
        mdl: 17.86,
        ron: 4.66,
        rub: 94.15,
        uah: 39.51,
        usd: 1
    }
}

const inputAmount = document.getElementById('inputAmount');
const inputCurrency = document.getElementById('inputCurrency');
const outputAmount = document.getElementById('outputAmount');
const outputCurrency = document.getElementById('outputCurrency');

inputAmount.addEventListener('input', calcOutputAmount);
inputCurrency.addEventListener('change', calcOutputAmount);
outputAmount.addEventListener('input', calcInputAmount);
outputCurrency.addEventListener('change', calcOutputAmount);

function calcOutputAmount() {
    convertCurrency(inputAmount, inputCurrency, outputAmount, outputCurrency);
}

function calcInputAmount() {
    convertCurrency(outputAmount, outputCurrency, inputAmount, inputCurrency);
}

function convertCurrency(fromAmountElement, fromCurrencyElement, toAmountElement, toCurrencyElement) {
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    const amount = parseFloat(fromAmountElement.value);
    if (amount < 0) {
        toAmountElement.value = '';
        return;
    }

    const rate = exchangeRate[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    if (!isNaN(convertedAmount)) {
        toAmountElement.value = convertedAmount.toFixed(2);
    } else {
        toAmountElement.value = '';
    }
}
