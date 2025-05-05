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
import { AppConfig } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function AppConfigCreateForm(props) {
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
    maxSetsSize: "",
    allowSkip: false,
  };
  const [maxSetsSize, setMaxSetsSize] = React.useState(
    initialValues.maxSetsSize
  );
  const [allowSkip, setAllowSkip] = React.useState(initialValues.allowSkip);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMaxSetsSize(initialValues.maxSetsSize);
    setAllowSkip(initialValues.allowSkip);
    setErrors({});
  };
  const validations = {
    maxSetsSize: [],
    allowSkip: [],
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
          maxSetsSize,
          allowSkip,
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
          await DataStore.save(new AppConfig(modelFields));
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
      {...getOverrideProps(overrides, "AppConfigCreateForm")}
      {...rest}
    >
      <TextField
        label="Max sets size"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxSetsSize}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              maxSetsSize: value,
              allowSkip,
            };
            const result = onChange(modelFields);
            value = result?.maxSetsSize ?? value;
          }
          if (errors.maxSetsSize?.hasError) {
            runValidationTasks("maxSetsSize", value);
          }
          setMaxSetsSize(value);
        }}
        onBlur={() => runValidationTasks("maxSetsSize", maxSetsSize)}
        errorMessage={errors.maxSetsSize?.errorMessage}
        hasError={errors.maxSetsSize?.hasError}
        {...getOverrideProps(overrides, "maxSetsSize")}
      ></TextField>
      <SwitchField
        label="Allow skip"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowSkip}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              maxSetsSize,
              allowSkip: value,
            };
            const result = onChange(modelFields);
            value = result?.allowSkip ?? value;
          }
          if (errors.allowSkip?.hasError) {
            runValidationTasks("allowSkip", value);
          }
          setAllowSkip(value);
        }}
        onBlur={() => runValidationTasks("allowSkip", allowSkip)}
        errorMessage={errors.allowSkip?.errorMessage}
        hasError={errors.allowSkip?.hasError}
        {...getOverrideProps(overrides, "allowSkip")}
      ></SwitchField>
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
