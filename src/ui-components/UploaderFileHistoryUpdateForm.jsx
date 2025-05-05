/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { UploaderFileHistory } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UploaderFileHistoryUpdateForm(props) {
  const {
    id: idProp,
    uploaderFileHistory: uploaderFileHistoryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    uuid: "",
    fileName: "",
    fileSize: "",
    downloadUrl: "",
    timeStamp: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [fileName, setFileName] = React.useState(initialValues.fileName);
  const [fileSize, setFileSize] = React.useState(initialValues.fileSize);
  const [downloadUrl, setDownloadUrl] = React.useState(
    initialValues.downloadUrl
  );
  const [timeStamp, setTimeStamp] = React.useState(initialValues.timeStamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uploaderFileHistoryRecord
      ? { ...initialValues, ...uploaderFileHistoryRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setUuid(cleanValues.uuid);
    setFileName(cleanValues.fileName);
    setFileSize(cleanValues.fileSize);
    setDownloadUrl(cleanValues.downloadUrl);
    setTimeStamp(cleanValues.timeStamp);
    setErrors({});
  };
  const [uploaderFileHistoryRecord, setUploaderFileHistoryRecord] =
    React.useState(uploaderFileHistoryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UploaderFileHistory, idProp)
        : uploaderFileHistoryModelProp;
      setUploaderFileHistoryRecord(record);
    };
    queryData();
  }, [idProp, uploaderFileHistoryModelProp]);
  React.useEffect(resetStateValues, [uploaderFileHistoryRecord]);
  const validations = {
    email: [],
    uuid: [],
    fileName: [],
    fileSize: [],
    downloadUrl: [],
    timeStamp: [],
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
          email,
          uuid,
          fileName,
          fileSize,
          downloadUrl,
          timeStamp,
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
          await DataStore.save(
            UploaderFileHistory.copyOf(uploaderFileHistoryRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UploaderFileHistoryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              uuid,
              fileName,
              fileSize,
              downloadUrl,
              timeStamp,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Uuid"
        isRequired={false}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              uuid: value,
              fileName,
              fileSize,
              downloadUrl,
              timeStamp,
            };
            const result = onChange(modelFields);
            value = result?.uuid ?? value;
          }
          if (errors.uuid?.hasError) {
            runValidationTasks("uuid", value);
          }
          setUuid(value);
        }}
        onBlur={() => runValidationTasks("uuid", uuid)}
        errorMessage={errors.uuid?.errorMessage}
        hasError={errors.uuid?.hasError}
        {...getOverrideProps(overrides, "uuid")}
      ></TextField>
      <TextField
        label="File name"
        isRequired={false}
        isReadOnly={false}
        value={fileName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              uuid,
              fileName: value,
              fileSize,
              downloadUrl,
              timeStamp,
            };
            const result = onChange(modelFields);
            value = result?.fileName ?? value;
          }
          if (errors.fileName?.hasError) {
            runValidationTasks("fileName", value);
          }
          setFileName(value);
        }}
        onBlur={() => runValidationTasks("fileName", fileName)}
        errorMessage={errors.fileName?.errorMessage}
        hasError={errors.fileName?.hasError}
        {...getOverrideProps(overrides, "fileName")}
      ></TextField>
      <TextField
        label="File size"
        isRequired={false}
        isReadOnly={false}
        value={fileSize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              uuid,
              fileName,
              fileSize: value,
              downloadUrl,
              timeStamp,
            };
            const result = onChange(modelFields);
            value = result?.fileSize ?? value;
          }
          if (errors.fileSize?.hasError) {
            runValidationTasks("fileSize", value);
          }
          setFileSize(value);
        }}
        onBlur={() => runValidationTasks("fileSize", fileSize)}
        errorMessage={errors.fileSize?.errorMessage}
        hasError={errors.fileSize?.hasError}
        {...getOverrideProps(overrides, "fileSize")}
      ></TextField>
      <TextField
        label="Download url"
        isRequired={false}
        isReadOnly={false}
        value={downloadUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              uuid,
              fileName,
              fileSize,
              downloadUrl: value,
              timeStamp,
            };
            const result = onChange(modelFields);
            value = result?.downloadUrl ?? value;
          }
          if (errors.downloadUrl?.hasError) {
            runValidationTasks("downloadUrl", value);
          }
          setDownloadUrl(value);
        }}
        onBlur={() => runValidationTasks("downloadUrl", downloadUrl)}
        errorMessage={errors.downloadUrl?.errorMessage}
        hasError={errors.downloadUrl?.hasError}
        {...getOverrideProps(overrides, "downloadUrl")}
      ></TextField>
      <TextField
        label="Time stamp"
        isRequired={false}
        isReadOnly={false}
        value={timeStamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              uuid,
              fileName,
              fileSize,
              downloadUrl,
              timeStamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timeStamp ?? value;
          }
          if (errors.timeStamp?.hasError) {
            runValidationTasks("timeStamp", value);
          }
          setTimeStamp(value);
        }}
        onBlur={() => runValidationTasks("timeStamp", timeStamp)}
        errorMessage={errors.timeStamp?.errorMessage}
        hasError={errors.timeStamp?.hasError}
        {...getOverrideProps(overrides, "timeStamp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uploaderFileHistoryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uploaderFileHistoryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
