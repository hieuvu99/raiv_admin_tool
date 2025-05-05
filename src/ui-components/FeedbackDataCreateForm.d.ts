/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeedbackDataCreateFormInputValues = {
    uid?: string;
    identityId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
    date?: string;
    isCompleted?: boolean;
};
export declare type FeedbackDataCreateFormValidationValues = {
    uid?: ValidationFunction<string>;
    identityId?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    isCompleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedbackDataCreateFormOverridesProps = {
    FeedbackDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uid?: PrimitiveOverrideProps<TextFieldProps>;
    identityId?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    isCompleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FeedbackDataCreateFormProps = React.PropsWithChildren<{
    overrides?: FeedbackDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeedbackDataCreateFormInputValues) => FeedbackDataCreateFormInputValues;
    onSuccess?: (fields: FeedbackDataCreateFormInputValues) => void;
    onError?: (fields: FeedbackDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedbackDataCreateFormInputValues) => FeedbackDataCreateFormInputValues;
    onValidate?: FeedbackDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeedbackDataCreateForm(props: FeedbackDataCreateFormProps): React.ReactElement;
