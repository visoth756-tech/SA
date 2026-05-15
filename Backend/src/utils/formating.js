export function formatNumber(value) {
  return value.toLocaleString('en-US');
}

export function formatMoney(value) {
  return (value / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatPercentage(per) {
  return `${(per / 100).toFixed(2)}%`;
}