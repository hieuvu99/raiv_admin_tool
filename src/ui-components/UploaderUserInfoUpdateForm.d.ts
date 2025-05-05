/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UploaderUserInfo } from "../models";
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
export declare type UploaderUserInfoUpdateFormInputValues = {
    uuid?: string;
    name?: string;
    email?: string;
    isActive?: boolean;
    isAdmin?: boolean;
};
export declare type UploaderUserInfoUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    isAdmin?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploaderUserInfoUpdateFormOverridesProps = {
    UploaderUserInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    isAdmin?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UploaderUserInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: UploaderUserInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uploaderUserInfo?: UploaderUserInfo;
    onSubmit?: (fields: UploaderUserInfoUpdateFormInputValues) => UploaderUserInfoUpdateFormInputValues;
    onSuccess?: (fields: UploaderUserInfoUpdateFormInputValues) => void;
    onError?: (fields: UploaderUserInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UploaderUserInfoUpdateFormInputValues) => UploaderUserInfoUpdateFormInputValues;
    onValidate?: UploaderUserInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UploaderUserInfoUpdateForm(props: UploaderUserInfoUpdateFormProps): React.ReactElement;
