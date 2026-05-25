export function formatNumber(value) {
  return Math.round(value).toLocaleString('en-US');
}

export function formatMoney(value) {
  const dollars = value / 100;
  const fixed2 = parseFloat(dollars.toFixed(2));
  return fixed2.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

export function formatPercentage(per) {
  const fixed2 = parseFloat((per / 100).toFixed(2));
  return `${fixed2}%`;
}

export function formatFullname(first = "", last = "") {
  return `${first} ${last}`.trim();
}