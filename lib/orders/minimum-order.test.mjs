import assert from "node:assert/strict"
import test from "node:test"
import { getMinimumOrderShortfall } from "./minimum-order.ts"

test("calcula o mínimo usando produtos e adicionais, sem entrega", () => {
  assert.equal(getMinimumOrderShortfall(19.99, 0, 20), 0.01)
  assert.equal(getMinimumOrderShortfall(15, 5, 20), 0)
  assert.equal(getMinimumOrderShortfall(20, 10, 20), 0)
  assert.equal(getMinimumOrderShortfall(15, 0, 20), 5)
})
