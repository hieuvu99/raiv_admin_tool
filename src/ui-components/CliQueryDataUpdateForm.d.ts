/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CliQueryData } from "../models";
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
export declare type CliQueryDataUpdateFormInputValues = {
    uuid?: string;
    title?: string;
    decscription?: string;
    gender?: string;
    transgender?: string;
    education?: string;
    languageId?: string;
    languageFluency?: string;
    miniCourse?: string;
    speechDisorders?: string;
    downloadUrl?: string;
    status?: string;
    date?: string;
};
export declare type CliQueryDataUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    decscription?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    transgender?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    languageId?: ValidationFunction<string>;
    languageFluency?: ValidationFunction<string>;
    miniCourse?: ValidationFunction<string>;
    speechDisorders?: ValidationFunction<string>;
    downloadUrl?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CliQueryDataUpdateFormOverridesProps = {
    CliQueryDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    decscription?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    transgender?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    languageId?: PrimitiveOverrideProps<TextFieldProps>;
    languageFluency?: PrimitiveOverrideProps<TextFieldProps>;
    miniCourse?: PrimitiveOverrideProps<TextFieldProps>;
    speechDisorders?: PrimitiveOverrideProps<TextFieldProps>;
    downloadUrl?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CliQueryDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: CliQueryDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cliQueryData?: CliQueryData;
    onSubmit?: (fields: CliQueryDataUpdateFormInputValues) => CliQueryDataUpdateFormInputValues;
    onSuccess?: (fields: CliQueryDataUpdateFormInputValues) => void;
    onError?: (fields: CliQueryDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CliQueryDataUpdateFormInputValues) => CliQueryDataUpdateFormInputValues;
    onValidate?: CliQueryDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CliQueryDataUpdateForm(props: CliQueryDataUpdateFormProps): React.ReactElement;
