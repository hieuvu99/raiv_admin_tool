/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AppConfig } from "../models";
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
export declare type AppConfigUpdateFormInputValues = {
    maxSetsSize?: number;
    allowSkip?: boolean;
};
export declare type AppConfigUpdateFormValidationValues = {
    maxSetsSize?: ValidationFunction<number>;
    allowSkip?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppConfigUpdateFormOverridesProps = {
    AppConfigUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    maxSetsSize?: PrimitiveOverrideProps<TextFieldProps>;
    allowSkip?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AppConfigUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppConfigUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appConfig?: AppConfig;
    onSubmit?: (fields: AppConfigUpdateFormInputValues) => AppConfigUpdateFormInputValues;
    onSuccess?: (fields: AppConfigUpdateFormInputValues) => void;
    onError?: (fields: AppConfigUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppConfigUpdateFormInputValues) => AppConfigUpdateFormInputValues;
    onValidate?: AppConfigUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppConfigUpdateForm(props: AppConfigUpdateFormProps): React.ReactElement;
