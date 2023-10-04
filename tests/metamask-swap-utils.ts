import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AdapterRemoved,
  AdapterSet,
  OwnershipTransferred,
  Paused,
  Swap,
  Unpaused
} from "../generated/MetamaskSwap/MetamaskSwap"

export function createAdapterRemovedEvent(
  aggregatorId: string
): AdapterRemoved {
  let adapterRemovedEvent = changetype<AdapterRemoved>(newMockEvent())

  adapterRemovedEvent.parameters = new Array()

  adapterRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "aggregatorId",
      ethereum.Value.fromString(aggregatorId)
    )
  )

  return adapterRemovedEvent
}

export function createAdapterSetEvent(
  aggregatorId: string,
  addr: Address,
  selector: Bytes,
  data: Bytes
): AdapterSet {
  let adapterSetEvent = changetype<AdapterSet>(newMockEvent())

  adapterSetEvent.parameters = new Array()

  adapterSetEvent.parameters.push(
    new ethereum.EventParam(
      "aggregatorId",
      ethereum.Value.fromString(aggregatorId)
    )
  )
  adapterSetEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  adapterSetEvent.parameters.push(
    new ethereum.EventParam("selector", ethereum.Value.fromFixedBytes(selector))
  )
  adapterSetEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return adapterSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createSwapEvent(aggregatorId: string, sender: Address): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam(
      "aggregatorId",
      ethereum.Value.fromString(aggregatorId)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return swapEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
