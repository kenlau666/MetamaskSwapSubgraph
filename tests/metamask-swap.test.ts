import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { AdapterRemoved } from "../generated/schema"
import { AdapterRemoved as AdapterRemovedEvent } from "../generated/MetamaskSwap/MetamaskSwap"
import { handleAdapterRemoved } from "../src/metamask-swap"
import { createAdapterRemovedEvent } from "./metamask-swap-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let aggregatorId = "Example string value"
    let newAdapterRemovedEvent = createAdapterRemovedEvent(aggregatorId)
    handleAdapterRemoved(newAdapterRemovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdapterRemoved created and stored", () => {
    assert.entityCount("AdapterRemoved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdapterRemoved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "aggregatorId",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
