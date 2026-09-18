import "server-only"
import { getMinimumOrderShortfall } from "./minimum-order"

export const MINIMUM_ORDER_VALUE = 20

export function getServerMinimumOrderShortfall(productsSubtotal: number, extrasTotal: number) {
  return getMinimumOrderShortfall(productsSubtotal, extrasTotal, MINIMUM_ORDER_VALUE)
}
