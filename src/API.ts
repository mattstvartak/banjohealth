/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  teamMember: string,
  priority: Priority,
  team: Team,
  dueDate: string,
  id?: string | null,
};

export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}


export enum Team {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
  YELLOW = "YELLOW",
}


export type ModelOrderConditionInput = {
  teamMember?: ModelStringInput | null,
  priority?: ModelPriorityInput | null,
  team?: ModelTeamInput | null,
  dueDate?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPriorityInput = {
  eq?: Priority | null,
  ne?: Priority | null,
};

export type ModelTeamInput = {
  eq?: Team | null,
  ne?: Team | null,
};

export type Order = {
  __typename: "Order",
  teamMember: string,
  priority: Priority,
  team: Team,
  dueDate: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderInput = {
  teamMember?: string | null,
  priority?: Priority | null,
  team?: Team | null,
  dueDate?: string | null,
  id: string,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  teamMember?: ModelStringInput | null,
  priority?: ModelPriorityInput | null,
  team?: ModelTeamInput | null,
  dueDate?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionOrderFilterInput = {
  teamMember?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  team?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      teamMember: string,
      priority: Priority,
      team: Team,
      dueDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    teamMember: string,
    priority: Priority,
    team: Team,
    dueDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
