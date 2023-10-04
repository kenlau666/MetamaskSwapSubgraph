// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdapterRemoved extends ethereum.Event {
  get params(): AdapterRemoved__Params {
    return new AdapterRemoved__Params(this);
  }
}

export class AdapterRemoved__Params {
  _event: AdapterRemoved;

  constructor(event: AdapterRemoved) {
    this._event = event;
  }

  get aggregatorId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class AdapterSet extends ethereum.Event {
  get params(): AdapterSet__Params {
    return new AdapterSet__Params(this);
  }
}

export class AdapterSet__Params {
  _event: AdapterSet;

  constructor(event: AdapterSet) {
    this._event = event;
  }

  get aggregatorId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get addr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get selector(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get aggregatorId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MetamaskSwap__adaptersResult {
  value0: Address;
  value1: Bytes;
  value2: Bytes;

  constructor(value0: Address, value1: Bytes, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromBytes(this.value2));
    return map;
  }

  getAddr(): Address {
    return this.value0;
  }

  getSelector(): Bytes {
    return this.value1;
  }

  getData(): Bytes {
    return this.value2;
  }
}

export class MetamaskSwap extends ethereum.SmartContract {
  static bind(address: Address): MetamaskSwap {
    return new MetamaskSwap("MetamaskSwap", address);
  }

  adapterRemoved(param0: string): boolean {
    let result = super.call("adapterRemoved", "adapterRemoved(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_adapterRemoved(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "adapterRemoved",
      "adapterRemoved(string):(bool)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  adapters(param0: string): MetamaskSwap__adaptersResult {
    let result = super.call(
      "adapters",
      "adapters(string):(address,bytes4,bytes)",
      [ethereum.Value.fromString(param0)]
    );

    return new MetamaskSwap__adaptersResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBytes()
    );
  }

  try_adapters(
    param0: string
  ): ethereum.CallResult<MetamaskSwap__adaptersResult> {
    let result = super.tryCall(
      "adapters",
      "adapters(string):(address,bytes4,bytes)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MetamaskSwap__adaptersResult(
        value[0].toAddress(),
        value[1].toBytes(),
        value[2].toBytes()
      )
    );
  }

  chi(): Address {
    let result = super.call("chi", "chi():(address)", []);

    return result[0].toAddress();
  }

  try_chi(): ethereum.CallResult<Address> {
    let result = super.tryCall("chi", "chi():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  spender(): Address {
    let result = super.call("spender", "spender():(address)", []);

    return result[0].toAddress();
  }

  try_spender(): ethereum.CallResult<Address> {
    let result = super.tryCall("spender", "spender():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _chi(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PauseSwapsCall extends ethereum.Call {
  get inputs(): PauseSwapsCall__Inputs {
    return new PauseSwapsCall__Inputs(this);
  }

  get outputs(): PauseSwapsCall__Outputs {
    return new PauseSwapsCall__Outputs(this);
  }
}

export class PauseSwapsCall__Inputs {
  _call: PauseSwapsCall;

  constructor(call: PauseSwapsCall) {
    this._call = call;
  }
}

export class PauseSwapsCall__Outputs {
  _call: PauseSwapsCall;

  constructor(call: PauseSwapsCall) {
    this._call = call;
  }
}

export class RemoveAdapterCall extends ethereum.Call {
  get inputs(): RemoveAdapterCall__Inputs {
    return new RemoveAdapterCall__Inputs(this);
  }

  get outputs(): RemoveAdapterCall__Outputs {
    return new RemoveAdapterCall__Outputs(this);
  }
}

export class RemoveAdapterCall__Inputs {
  _call: RemoveAdapterCall;

  constructor(call: RemoveAdapterCall) {
    this._call = call;
  }

  get aggregatorId(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class RemoveAdapterCall__Outputs {
  _call: RemoveAdapterCall;

  constructor(call: RemoveAdapterCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAdapterCall extends ethereum.Call {
  get inputs(): SetAdapterCall__Inputs {
    return new SetAdapterCall__Inputs(this);
  }

  get outputs(): SetAdapterCall__Outputs {
    return new SetAdapterCall__Outputs(this);
  }
}

export class SetAdapterCall__Inputs {
  _call: SetAdapterCall;

  constructor(call: SetAdapterCall) {
    this._call = call;
  }

  get aggregatorId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get addr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get selector(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SetAdapterCall__Outputs {
  _call: SetAdapterCall;

  constructor(call: SetAdapterCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get aggregatorId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get tokenFrom(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }
}

export class SwapUsingGasTokenCall extends ethereum.Call {
  get inputs(): SwapUsingGasTokenCall__Inputs {
    return new SwapUsingGasTokenCall__Inputs(this);
  }

  get outputs(): SwapUsingGasTokenCall__Outputs {
    return new SwapUsingGasTokenCall__Outputs(this);
  }
}

export class SwapUsingGasTokenCall__Inputs {
  _call: SwapUsingGasTokenCall;

  constructor(call: SwapUsingGasTokenCall) {
    this._call = call;
  }

  get aggregatorId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get tokenFrom(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SwapUsingGasTokenCall__Outputs {
  _call: SwapUsingGasTokenCall;

  constructor(call: SwapUsingGasTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseSwapsCall extends ethereum.Call {
  get inputs(): UnpauseSwapsCall__Inputs {
    return new UnpauseSwapsCall__Inputs(this);
  }

  get outputs(): UnpauseSwapsCall__Outputs {
    return new UnpauseSwapsCall__Outputs(this);
  }
}

export class UnpauseSwapsCall__Inputs {
  _call: UnpauseSwapsCall;

  constructor(call: UnpauseSwapsCall) {
    this._call = call;
  }
}

export class UnpauseSwapsCall__Outputs {
  _call: UnpauseSwapsCall;

  constructor(call: UnpauseSwapsCall) {
    this._call = call;
  }
}