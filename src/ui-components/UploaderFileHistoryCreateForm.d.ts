/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UploaderFileHistoryCreateFormInputValues = {
    email?: string;
    uuid?: string;
    fileName?: string;
    fileSize?: string;
    downloadUrl?: string;
    timeStamp?: string;
};
export declare type UploaderFileHistoryCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    uuid?: ValidationFunction<string>;
    fileName?: ValidationFunction<string>;
    fileSize?: ValidationFunction<string>;
    downloadUrl?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploaderFileHistoryCreateFormOverridesProps = {
    UploaderFileHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    fileSize?: PrimitiveOverrideProps<TextFieldProps>;
    downloadUrl?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UploaderFileHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: UploaderFileHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UploaderFileHistoryCreateFormInputValues) => UploaderFileHistoryCreateFormInputValues;
    onSuccess?: (fields: UploaderFileHistoryCreateFormInputValues) => void;
    onError?: (fields: UploaderFileHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UploaderFileHistoryCreateFormInputValues) => UploaderFileHistoryCreateFormInputValues;
    onValidate?: UploaderFileHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function UploaderFileHistoryCreateForm(props: UploaderFileHistoryCreateFormProps): React.ReactElement;
