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
export declare type UserInfoCreateFormInputValues = {
    languageId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phraseSubsetIndex?: string;
    project?: string;
    dob?: string;
    gender?: string;
    geographicLocation?: string;
    firstLanguage?: string;
    fluency?: string;
    education?: string;
    priorMinCourseTraining?: string;
    speechDisorders?: string;
    isTransgender?: string;
    uid?: string;
    isAdmin?: boolean;
    isActive?: boolean;
    identityId?: string;
    enabledDailyReminder?: boolean;
    reminderTime?: string;
    postgresId?: number;
};
export declare type UserInfoCreateFormValidationValues = {
    languageId?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phraseSubsetIndex?: ValidationFunction<string>;
    project?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    geographicLocation?: ValidationFunction<string>;
    firstLanguage?: ValidationFunction<string>;
    fluency?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    priorMinCourseTraining?: ValidationFunction<string>;
    speechDisorders?: ValidationFunction<string>;
    isTransgender?: ValidationFunction<string>;
    uid?: ValidationFunction<string>;
    isAdmin?: ValidationFunction<boolean>;
    isActive?: ValidationFunction<boolean>;
    identityId?: ValidationFunction<string>;
    enabledDailyReminder?: ValidationFunction<boolean>;
    reminderTime?: ValidationFunction<string>;
    postgresId?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoCreateFormOverridesProps = {
    UserInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    languageId?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phraseSubsetIndex?: PrimitiveOverrideProps<TextFieldProps>;
    project?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    geographicLocation?: PrimitiveOverrideProps<TextFieldProps>;
    firstLanguage?: PrimitiveOverrideProps<TextFieldProps>;
    fluency?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    priorMinCourseTraining?: PrimitiveOverrideProps<TextFieldProps>;
    speechDisorders?: PrimitiveOverrideProps<TextFieldProps>;
    isTransgender?: PrimitiveOverrideProps<TextFieldProps>;
    uid?: PrimitiveOverrideProps<TextFieldProps>;
    isAdmin?: PrimitiveOverrideProps<SwitchFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    identityId?: PrimitiveOverrideProps<TextFieldProps>;
    enabledDailyReminder?: PrimitiveOverrideProps<SwitchFieldProps>;
    reminderTime?: PrimitiveOverrideProps<TextFieldProps>;
    postgresId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: UserInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserInfoCreateFormInputValues) => UserInfoCreateFormInputValues;
    onSuccess?: (fields: UserInfoCreateFormInputValues) => void;
    onError?: (fields: UserInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserInfoCreateFormInputValues) => UserInfoCreateFormInputValues;
    onValidate?: UserInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserInfoCreateForm(props: UserInfoCreateFormProps): React.ReactElement;
