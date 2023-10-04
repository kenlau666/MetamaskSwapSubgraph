import {
  AdapterRemoved as AdapterRemovedEvent,
  AdapterSet as AdapterSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Swap as SwapEvent,
  Unpaused as UnpausedEvent
} from "../generated/MetamaskSwap/MetamaskSwap"
import {
  AdapterRemoved,
  AdapterSet,
  OwnershipTransferred,
  Paused,
  Swap,
  Unpaused
} from "../generated/schema"

export function handleAdapterRemoved(event: AdapterRemovedEvent): void {
  let entity = new AdapterRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aggregatorId = event.params.aggregatorId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdapterSet(event: AdapterSetEvent): void {
  let entity = new AdapterSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aggregatorId = event.params.aggregatorId
  entity.addr = event.params.addr
  entity.selector = event.params.selector
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aggregatorId = event.params.aggregatorId
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
