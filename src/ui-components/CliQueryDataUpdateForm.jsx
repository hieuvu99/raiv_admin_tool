/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { CliQueryData } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CliQueryDataUpdateForm(props) {
  const {
    id: idProp,
    cliQueryData: cliQueryDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    uuid: "",
    title: "",
    decscription: "",
    gender: "",
    transgender: "",
    education: "",
    languageId: "",
    languageFluency: "",
    miniCourse: "",
    speechDisorders: "",
    downloadUrl: "",
    status: "",
    date: "",
  };
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [title, setTitle] = React.useState(initialValues.title);
  const [decscription, setDecscription] = React.useState(
    initialValues.decscription
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [transgender, setTransgender] = React.useState(
    initialValues.transgender
  );
  const [education, setEducation] = React.useState(initialValues.education);
  const [languageId, setLanguageId] = React.useState(initialValues.languageId);
  const [languageFluency, setLanguageFluency] = React.useState(
    initialValues.languageFluency
  );
  const [miniCourse, setMiniCourse] = React.useState(initialValues.miniCourse);
  const [speechDisorders, setSpeechDisorders] = React.useState(
    initialValues.speechDisorders
  );
  const [downloadUrl, setDownloadUrl] = React.useState(
    initialValues.downloadUrl
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cliQueryDataRecord
      ? { ...initialValues, ...cliQueryDataRecord }
      : initialValues;
    setUuid(cleanValues.uuid);
    setTitle(cleanValues.title);
    setDecscription(cleanValues.decscription);
    setGender(cleanValues.gender);
    setTransgender(cleanValues.transgender);
    setEducation(cleanValues.education);
    setLanguageId(cleanValues.languageId);
    setLanguageFluency(cleanValues.languageFluency);
    setMiniCourse(cleanValues.miniCourse);
    setSpeechDisorders(cleanValues.speechDisorders);
    setDownloadUrl(cleanValues.downloadUrl);
    setStatus(cleanValues.status);
    setDate(cleanValues.date);
    setErrors({});
  };
  const [cliQueryDataRecord, setCliQueryDataRecord] = React.useState(
    cliQueryDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CliQueryData, idProp)
        : cliQueryDataModelProp;
      setCliQueryDataRecord(record);
    };
    queryData();
  }, [idProp, cliQueryDataModelProp]);
  React.useEffect(resetStateValues, [cliQueryDataRecord]);
  const validations = {
    uuid: [],
    title: [],
    decscription: [],
    gender: [],
    transgender: [],
    education: [],
    languageId: [],
    languageFluency: [],
    miniCourse: [],
    speechDisorders: [],
    downloadUrl: [],
    status: [],
    date: [],
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
          uuid,
          title,
          decscription,
          gender,
          transgender,
          education,
          languageId,
          languageFluency,
          miniCourse,
          speechDisorders,
          downloadUrl,
          status,
          date,
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
            CliQueryData.copyOf(cliQueryDataRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CliQueryDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Uuid"
        isRequired={false}
        isReadOnly={false}
        value={uuid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid: value,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title: value,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Decscription"
        isRequired={false}
        isReadOnly={false}
        value={decscription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription: value,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.decscription ?? value;
          }
          if (errors.decscription?.hasError) {
            runValidationTasks("decscription", value);
          }
          setDecscription(value);
        }}
        onBlur={() => runValidationTasks("decscription", decscription)}
        errorMessage={errors.decscription?.errorMessage}
        hasError={errors.decscription?.hasError}
        {...getOverrideProps(overrides, "decscription")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender: value,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Transgender"
        isRequired={false}
        isReadOnly={false}
        value={transgender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender: value,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.transgender ?? value;
          }
          if (errors.transgender?.hasError) {
            runValidationTasks("transgender", value);
          }
          setTransgender(value);
        }}
        onBlur={() => runValidationTasks("transgender", transgender)}
        errorMessage={errors.transgender?.errorMessage}
        hasError={errors.transgender?.hasError}
        {...getOverrideProps(overrides, "transgender")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={false}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education: value,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <TextField
        label="Language id"
        isRequired={false}
        isReadOnly={false}
        value={languageId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId: value,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
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
        label="Language fluency"
        isRequired={false}
        isReadOnly={false}
        value={languageFluency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency: value,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.languageFluency ?? value;
          }
          if (errors.languageFluency?.hasError) {
            runValidationTasks("languageFluency", value);
          }
          setLanguageFluency(value);
        }}
        onBlur={() => runValidationTasks("languageFluency", languageFluency)}
        errorMessage={errors.languageFluency?.errorMessage}
        hasError={errors.languageFluency?.hasError}
        {...getOverrideProps(overrides, "languageFluency")}
      ></TextField>
      <TextField
        label="Mini course"
        isRequired={false}
        isReadOnly={false}
        value={miniCourse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse: value,
              speechDisorders,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.miniCourse ?? value;
          }
          if (errors.miniCourse?.hasError) {
            runValidationTasks("miniCourse", value);
          }
          setMiniCourse(value);
        }}
        onBlur={() => runValidationTasks("miniCourse", miniCourse)}
        errorMessage={errors.miniCourse?.errorMessage}
        hasError={errors.miniCourse?.hasError}
        {...getOverrideProps(overrides, "miniCourse")}
      ></TextField>
      <TextField
        label="Speech disorders"
        isRequired={false}
        isReadOnly={false}
        value={speechDisorders}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders: value,
              downloadUrl,
              status,
              date,
            };
            const result = onChange(modelFields);
            value = result?.speechDisorders ?? value;
          }
          if (errors.speechDisorders?.hasError) {
            runValidationTasks("speechDisorders", value);
          }
          setSpeechDisorders(value);
        }}
        onBlur={() => runValidationTasks("speechDisorders", speechDisorders)}
        errorMessage={errors.speechDisorders?.errorMessage}
        hasError={errors.speechDisorders?.hasError}
        {...getOverrideProps(overrides, "speechDisorders")}
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
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl: value,
              status,
              date,
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
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status: value,
              date,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              uuid,
              title,
              decscription,
              gender,
              transgender,
              education,
              languageId,
              languageFluency,
              miniCourse,
              speechDisorders,
              downloadUrl,
              status,
              date: value,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
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
          isDisabled={!(idProp || cliQueryDataModelProp)}
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
              !(idProp || cliQueryDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
