export const numberWithCurrencyAndComma = (number: number): string => {
  return number.toLocaleString('en-IN', {
    currency: 'INR',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    style: 'currency',
  });
};
