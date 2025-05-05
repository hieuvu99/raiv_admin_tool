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
export declare type RecordedPhraseCreateFormInputValues = {
    phraseId?: string;
    phraseSetId?: string;
    identityId?: string;
    uuid?: string;
    postgresId?: string;
    filepath?: string;
    recordedTime?: string;
    languageId?: string;
    isValidated?: boolean;
    validationStatus?: string;
    validationComment?: string;
    validationRating?: number;
    validatedBy?: string;
    validatedAt?: string;
};
export declare type RecordedPhraseCreateFormValidationValues = {
    phraseId?: ValidationFunction<string>;
    phraseSetId?: ValidationFunction<string>;
    identityId?: ValidationFunction<string>;
    uuid?: ValidationFunction<string>;
    postgresId?: ValidationFunction<string>;
    filepath?: ValidationFunction<string>;
    recordedTime?: ValidationFunction<string>;
    languageId?: ValidationFunction<string>;
    isValidated?: ValidationFunction<boolean>;
    validationStatus?: ValidationFunction<string>;
    validationComment?: ValidationFunction<string>;
    validationRating?: ValidationFunction<number>;
    validatedBy?: ValidationFunction<string>;
    validatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordedPhraseCreateFormOverridesProps = {
    RecordedPhraseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phraseId?: PrimitiveOverrideProps<TextFieldProps>;
    phraseSetId?: PrimitiveOverrideProps<TextFieldProps>;
    identityId?: PrimitiveOverrideProps<TextFieldProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    postgresId?: PrimitiveOverrideProps<TextFieldProps>;
    filepath?: PrimitiveOverrideProps<TextFieldProps>;
    recordedTime?: PrimitiveOverrideProps<TextFieldProps>;
    languageId?: PrimitiveOverrideProps<TextFieldProps>;
    isValidated?: PrimitiveOverrideProps<SwitchFieldProps>;
    validationStatus?: PrimitiveOverrideProps<TextFieldProps>;
    validationComment?: PrimitiveOverrideProps<TextFieldProps>;
    validationRating?: PrimitiveOverrideProps<TextFieldProps>;
    validatedBy?: PrimitiveOverrideProps<TextFieldProps>;
    validatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordedPhraseCreateFormProps = React.PropsWithChildren<{
    overrides?: RecordedPhraseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecordedPhraseCreateFormInputValues) => RecordedPhraseCreateFormInputValues;
    onSuccess?: (fields: RecordedPhraseCreateFormInputValues) => void;
    onError?: (fields: RecordedPhraseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordedPhraseCreateFormInputValues) => RecordedPhraseCreateFormInputValues;
    onValidate?: RecordedPhraseCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecordedPhraseCreateForm(props: RecordedPhraseCreateFormProps): React.ReactElement;
