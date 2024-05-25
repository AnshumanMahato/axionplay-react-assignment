export default function formatCurrency(amount, currency = 'INR') {
  return Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount.toFixed(2));
}
