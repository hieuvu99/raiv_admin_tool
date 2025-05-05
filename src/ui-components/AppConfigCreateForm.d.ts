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
export declare type AppConfigCreateFormInputValues = {
    maxSetsSize?: number;
    allowSkip?: boolean;
};
export declare type AppConfigCreateFormValidationValues = {
    maxSetsSize?: ValidationFunction<number>;
    allowSkip?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppConfigCreateFormOverridesProps = {
    AppConfigCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    maxSetsSize?: PrimitiveOverrideProps<TextFieldProps>;
    allowSkip?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AppConfigCreateFormProps = React.PropsWithChildren<{
    overrides?: AppConfigCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppConfigCreateFormInputValues) => AppConfigCreateFormInputValues;
    onSuccess?: (fields: AppConfigCreateFormInputValues) => void;
    onError?: (fields: AppConfigCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppConfigCreateFormInputValues) => AppConfigCreateFormInputValues;
    onValidate?: AppConfigCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppConfigCreateForm(props: AppConfigCreateFormProps): React.ReactElement;
