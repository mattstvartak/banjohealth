/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrdersCreateFormInputValues = {
    teamMember?: string;
    priority?: string;
    team?: string;
    dueDate?: string;
};
export declare type OrdersCreateFormValidationValues = {
    teamMember?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
    team?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersCreateFormOverridesProps = {
    OrdersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    teamMember?: PrimitiveOverrideProps<TextFieldProps>;
    priority?: PrimitiveOverrideProps<SelectFieldProps>;
    team?: PrimitiveOverrideProps<SelectFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersCreateFormProps = React.PropsWithChildren<{
    overrides?: OrdersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onSuccess?: (fields: OrdersCreateFormInputValues) => void;
    onError?: (fields: OrdersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onValidate?: OrdersCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrdersCreateForm(props: OrdersCreateFormProps): React.ReactElement;
