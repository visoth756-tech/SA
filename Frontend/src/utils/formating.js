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

export function formatPhone(phone) {
  if (!phone) return "-";

  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }

  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
};