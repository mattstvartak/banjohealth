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
  LOW = "LOW"
}



type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamMember: string;
  readonly priority: Priority | keyof typeof Priority;
  readonly team: Team | keyof typeof Team;
  readonly dueDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamMember: string;
  readonly priority: Priority | keyof typeof Priority;
  readonly team: Team | keyof typeof Team;
  readonly dueDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}