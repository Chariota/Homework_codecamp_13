function extractCurrencyValue(string, rate) {
  if (Number(string)) {
    return Number(string) * rate;
  } else {
    string = string.replace("$", "");

    return Number(string) * rate;
  }
}

alert(extractCurrencyValue("$120", 30.5) === 3660); // true
