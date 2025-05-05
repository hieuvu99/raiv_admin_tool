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
export declare type KwakwalaPhraseDBCreateFormInputValues = {
    phraseId?: number;
    phraseSetId?: number;
    description?: string;
    original?: string;
    translated?: string;
    enabled?: boolean;
    languageId?: number;
    exampleAudioPath?: string;
    recording1Start?: number;
    recording1Stop?: number;
    recording2Start?: number;
    recording2Stop?: number;
};
export declare type KwakwalaPhraseDBCreateFormValidationValues = {
    phraseId?: ValidationFunction<number>;
    phraseSetId?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    original?: ValidationFunction<string>;
    translated?: ValidationFunction<string>;
    enabled?: ValidationFunction<boolean>;
    languageId?: ValidationFunction<number>;
    exampleAudioPath?: ValidationFunction<string>;
    recording1Start?: ValidationFunction<number>;
    recording1Stop?: ValidationFunction<number>;
    recording2Start?: ValidationFunction<number>;
    recording2Stop?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KwakwalaPhraseDBCreateFormOverridesProps = {
    KwakwalaPhraseDBCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phraseId?: PrimitiveOverrideProps<TextFieldProps>;
    phraseSetId?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    original?: PrimitiveOverrideProps<TextFieldProps>;
    translated?: PrimitiveOverrideProps<TextFieldProps>;
    enabled?: PrimitiveOverrideProps<SwitchFieldProps>;
    languageId?: PrimitiveOverrideProps<TextFieldProps>;
    exampleAudioPath?: PrimitiveOverrideProps<TextFieldProps>;
    recording1Start?: PrimitiveOverrideProps<TextFieldProps>;
    recording1Stop?: PrimitiveOverrideProps<TextFieldProps>;
    recording2Start?: PrimitiveOverrideProps<TextFieldProps>;
    recording2Stop?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KwakwalaPhraseDBCreateFormProps = React.PropsWithChildren<{
    overrides?: KwakwalaPhraseDBCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KwakwalaPhraseDBCreateFormInputValues) => KwakwalaPhraseDBCreateFormInputValues;
    onSuccess?: (fields: KwakwalaPhraseDBCreateFormInputValues) => void;
    onError?: (fields: KwakwalaPhraseDBCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KwakwalaPhraseDBCreateFormInputValues) => KwakwalaPhraseDBCreateFormInputValues;
    onValidate?: KwakwalaPhraseDBCreateFormValidationValues;
} & React.CSSProperties>;
export default function KwakwalaPhraseDBCreateForm(props: KwakwalaPhraseDBCreateFormProps): React.ReactElement;
