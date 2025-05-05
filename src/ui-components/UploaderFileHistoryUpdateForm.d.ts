/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UploaderFileHistory } from "../models";
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
export declare type UploaderFileHistoryUpdateFormInputValues = {
    email?: string;
    uuid?: string;
    fileName?: string;
    fileSize?: string;
    downloadUrl?: string;
    timeStamp?: string;
};
export declare type UploaderFileHistoryUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    uuid?: ValidationFunction<string>;
    fileName?: ValidationFunction<string>;
    fileSize?: ValidationFunction<string>;
    downloadUrl?: ValidationFunction<string>;
    timeStamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploaderFileHistoryUpdateFormOverridesProps = {
    UploaderFileHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    fileSize?: PrimitiveOverrideProps<TextFieldProps>;
    downloadUrl?: PrimitiveOverrideProps<TextFieldProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UploaderFileHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: UploaderFileHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uploaderFileHistory?: UploaderFileHistory;
    onSubmit?: (fields: UploaderFileHistoryUpdateFormInputValues) => UploaderFileHistoryUpdateFormInputValues;
    onSuccess?: (fields: UploaderFileHistoryUpdateFormInputValues) => void;
    onError?: (fields: UploaderFileHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UploaderFileHistoryUpdateFormInputValues) => UploaderFileHistoryUpdateFormInputValues;
    onValidate?: UploaderFileHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UploaderFileHistoryUpdateForm(props: UploaderFileHistoryUpdateFormProps): React.ReactElement;
