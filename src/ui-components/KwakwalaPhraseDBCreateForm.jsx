/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { KwakwalaPhraseDB } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function KwakwalaPhraseDBCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    phraseId: "",
    phraseSetId: "",
    description: "",
    original: "",
    translated: "",
    enabled: false,
    languageId: "",
    exampleAudioPath: "",
    recording1Start: "",
    recording1Stop: "",
    recording2Start: "",
    recording2Stop: "",
  };
  const [phraseId, setPhraseId] = React.useState(initialValues.phraseId);
  const [phraseSetId, setPhraseSetId] = React.useState(
    initialValues.phraseSetId
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [original, setOriginal] = React.useState(initialValues.original);
  const [translated, setTranslated] = React.useState(initialValues.translated);
  const [enabled, setEnabled] = React.useState(initialValues.enabled);
  const [languageId, setLanguageId] = React.useState(initialValues.languageId);
  const [exampleAudioPath, setExampleAudioPath] = React.useState(
    initialValues.exampleAudioPath
  );
  const [recording1Start, setRecording1Start] = React.useState(
    initialValues.recording1Start
  );
  const [recording1Stop, setRecording1Stop] = React.useState(
    initialValues.recording1Stop
  );
  const [recording2Start, setRecording2Start] = React.useState(
    initialValues.recording2Start
  );
  const [recording2Stop, setRecording2Stop] = React.useState(
    initialValues.recording2Stop
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPhraseId(initialValues.phraseId);
    setPhraseSetId(initialValues.phraseSetId);
    setDescription(initialValues.description);
    setOriginal(initialValues.original);
    setTranslated(initialValues.translated);
    setEnabled(initialValues.enabled);
    setLanguageId(initialValues.languageId);
    setExampleAudioPath(initialValues.exampleAudioPath);
    setRecording1Start(initialValues.recording1Start);
    setRecording1Stop(initialValues.recording1Stop);
    setRecording2Start(initialValues.recording2Start);
    setRecording2Stop(initialValues.recording2Stop);
    setErrors({});
  };
  const validations = {
    phraseId: [],
    phraseSetId: [],
    description: [],
    original: [],
    translated: [],
    enabled: [],
    languageId: [],
    exampleAudioPath: [],
    recording1Start: [],
    recording1Stop: [],
    recording2Start: [],
    recording2Stop: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          phraseId,
          phraseSetId,
          description,
          original,
          translated,
          enabled,
          languageId,
          exampleAudioPath,
          recording1Start,
          recording1Stop,
          recording2Start,
          recording2Stop,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new KwakwalaPhraseDB(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "KwakwalaPhraseDBCreateForm")}
      {...rest}
    >
      <TextField
        label="Phrase id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={phraseId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId: value,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.phraseId ?? value;
          }
          if (errors.phraseId?.hasError) {
            runValidationTasks("phraseId", value);
          }
          setPhraseId(value);
        }}
        onBlur={() => runValidationTasks("phraseId", phraseId)}
        errorMessage={errors.phraseId?.errorMessage}
        hasError={errors.phraseId?.hasError}
        {...getOverrideProps(overrides, "phraseId")}
      ></TextField>
      <TextField
        label="Phrase set id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={phraseSetId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId: value,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.phraseSetId ?? value;
          }
          if (errors.phraseSetId?.hasError) {
            runValidationTasks("phraseSetId", value);
          }
          setPhraseSetId(value);
        }}
        onBlur={() => runValidationTasks("phraseSetId", phraseSetId)}
        errorMessage={errors.phraseSetId?.errorMessage}
        hasError={errors.phraseSetId?.hasError}
        {...getOverrideProps(overrides, "phraseSetId")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description: value,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Original"
        isRequired={false}
        isReadOnly={false}
        value={original}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original: value,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.original ?? value;
          }
          if (errors.original?.hasError) {
            runValidationTasks("original", value);
          }
          setOriginal(value);
        }}
        onBlur={() => runValidationTasks("original", original)}
        errorMessage={errors.original?.errorMessage}
        hasError={errors.original?.hasError}
        {...getOverrideProps(overrides, "original")}
      ></TextField>
      <TextField
        label="Translated"
        isRequired={false}
        isReadOnly={false}
        value={translated}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated: value,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.translated ?? value;
          }
          if (errors.translated?.hasError) {
            runValidationTasks("translated", value);
          }
          setTranslated(value);
        }}
        onBlur={() => runValidationTasks("translated", translated)}
        errorMessage={errors.translated?.errorMessage}
        hasError={errors.translated?.hasError}
        {...getOverrideProps(overrides, "translated")}
      ></TextField>
      <SwitchField
        label="Enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={enabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled: value,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.enabled ?? value;
          }
          if (errors.enabled?.hasError) {
            runValidationTasks("enabled", value);
          }
          setEnabled(value);
        }}
        onBlur={() => runValidationTasks("enabled", enabled)}
        errorMessage={errors.enabled?.errorMessage}
        hasError={errors.enabled?.hasError}
        {...getOverrideProps(overrides, "enabled")}
      ></SwitchField>
      <TextField
        label="Language id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={languageId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId: value,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.languageId ?? value;
          }
          if (errors.languageId?.hasError) {
            runValidationTasks("languageId", value);
          }
          setLanguageId(value);
        }}
        onBlur={() => runValidationTasks("languageId", languageId)}
        errorMessage={errors.languageId?.errorMessage}
        hasError={errors.languageId?.hasError}
        {...getOverrideProps(overrides, "languageId")}
      ></TextField>
      <TextField
        label="Example audio path"
        isRequired={false}
        isReadOnly={false}
        value={exampleAudioPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath: value,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.exampleAudioPath ?? value;
          }
          if (errors.exampleAudioPath?.hasError) {
            runValidationTasks("exampleAudioPath", value);
          }
          setExampleAudioPath(value);
        }}
        onBlur={() => runValidationTasks("exampleAudioPath", exampleAudioPath)}
        errorMessage={errors.exampleAudioPath?.errorMessage}
        hasError={errors.exampleAudioPath?.hasError}
        {...getOverrideProps(overrides, "exampleAudioPath")}
      ></TextField>
      <TextField
        label="Recording1 start"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recording1Start}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start: value,
              recording1Stop,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.recording1Start ?? value;
          }
          if (errors.recording1Start?.hasError) {
            runValidationTasks("recording1Start", value);
          }
          setRecording1Start(value);
        }}
        onBlur={() => runValidationTasks("recording1Start", recording1Start)}
        errorMessage={errors.recording1Start?.errorMessage}
        hasError={errors.recording1Start?.hasError}
        {...getOverrideProps(overrides, "recording1Start")}
      ></TextField>
      <TextField
        label="Recording1 stop"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recording1Stop}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop: value,
              recording2Start,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.recording1Stop ?? value;
          }
          if (errors.recording1Stop?.hasError) {
            runValidationTasks("recording1Stop", value);
          }
          setRecording1Stop(value);
        }}
        onBlur={() => runValidationTasks("recording1Stop", recording1Stop)}
        errorMessage={errors.recording1Stop?.errorMessage}
        hasError={errors.recording1Stop?.hasError}
        {...getOverrideProps(overrides, "recording1Stop")}
      ></TextField>
      <TextField
        label="Recording2 start"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recording2Start}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start: value,
              recording2Stop,
            };
            const result = onChange(modelFields);
            value = result?.recording2Start ?? value;
          }
          if (errors.recording2Start?.hasError) {
            runValidationTasks("recording2Start", value);
          }
          setRecording2Start(value);
        }}
        onBlur={() => runValidationTasks("recording2Start", recording2Start)}
        errorMessage={errors.recording2Start?.errorMessage}
        hasError={errors.recording2Start?.hasError}
        {...getOverrideProps(overrides, "recording2Start")}
      ></TextField>
      <TextField
        label="Recording2 stop"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={recording2Stop}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              description,
              original,
              translated,
              enabled,
              languageId,
              exampleAudioPath,
              recording1Start,
              recording1Stop,
              recording2Start,
              recording2Stop: value,
            };
            const result = onChange(modelFields);
            value = result?.recording2Stop ?? value;
          }
          if (errors.recording2Stop?.hasError) {
            runValidationTasks("recording2Stop", value);
          }
          setRecording2Stop(value);
        }}
        onBlur={() => runValidationTasks("recording2Stop", recording2Stop)}
        errorMessage={errors.recording2Stop?.errorMessage}
        hasError={errors.recording2Stop?.hasError}
        {...getOverrideProps(overrides, "recording2Stop")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
