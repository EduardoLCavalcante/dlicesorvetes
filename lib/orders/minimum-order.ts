export function getMinimumOrderShortfall(productsSubtotal: number, extrasTotal: number, minimumOrderValue: number) {
  const itemsTotalInCents = Math.round(productsSubtotal * 100) + Math.round(extrasTotal * 100)
  return Math.max(0, (Math.round(minimumOrderValue * 100) - itemsTotalInCents) / 100)
}
