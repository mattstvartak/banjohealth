import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Team {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
  YELLOW = "YELLOW"
}

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LLOW = "LLOW"
}



type EagerOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamMember?: string | null;
  readonly priority?: Priority | keyof typeof Priority | null;
  readonly team?: Team | keyof typeof Team | null;
  readonly dueDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamMember?: string | null;
  readonly priority?: Priority | keyof typeof Priority | null;
  readonly team?: Team | keyof typeof Team | null;
  readonly dueDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Orders = LazyLoading extends LazyLoadingDisabled ? EagerOrders : LazyOrders

export declare const Orders: (new (init: ModelInit<Orders>) => Orders) & {
  copyOf(source: Orders, mutator: (draft: MutableModel<Orders>) => MutableModel<Orders> | void): Orders;
}