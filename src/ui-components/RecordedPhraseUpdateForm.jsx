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
import { RecordedPhrase } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function RecordedPhraseUpdateForm(props) {
  const {
    id: idProp,
    recordedPhrase: recordedPhraseModelProp,
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
    identityId: "",
    uuid: "",
    postgresId: "",
    filepath: "",
    recordedTime: "",
    languageId: "",
    isValidated: false,
    validationStatus: "",
    validationComment: "",
    validationRating: "",
    validatedBy: "",
    validatedAt: "",
  };
  const [phraseId, setPhraseId] = React.useState(initialValues.phraseId);
  const [phraseSetId, setPhraseSetId] = React.useState(
    initialValues.phraseSetId
  );
  const [identityId, setIdentityId] = React.useState(initialValues.identityId);
  const [uuid, setUuid] = React.useState(initialValues.uuid);
  const [postgresId, setPostgresId] = React.useState(initialValues.postgresId);
  const [filepath, setFilepath] = React.useState(initialValues.filepath);
  const [recordedTime, setRecordedTime] = React.useState(
    initialValues.recordedTime
  );
  const [languageId, setLanguageId] = React.useState(initialValues.languageId);
  const [isValidated, setIsValidated] = React.useState(
    initialValues.isValidated
  );
  const [validationStatus, setValidationStatus] = React.useState(
    initialValues.validationStatus
  );
  const [validationComment, setValidationComment] = React.useState(
    initialValues.validationComment
  );
  const [validationRating, setValidationRating] = React.useState(
    initialValues.validationRating
  );
  const [validatedBy, setValidatedBy] = React.useState(
    initialValues.validatedBy
  );
  const [validatedAt, setValidatedAt] = React.useState(
    initialValues.validatedAt
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recordedPhraseRecord
      ? { ...initialValues, ...recordedPhraseRecord }
      : initialValues;
    setPhraseId(cleanValues.phraseId);
    setPhraseSetId(cleanValues.phraseSetId);
    setIdentityId(cleanValues.identityId);
    setUuid(cleanValues.uuid);
    setPostgresId(cleanValues.postgresId);
    setFilepath(cleanValues.filepath);
    setRecordedTime(cleanValues.recordedTime);
    setLanguageId(cleanValues.languageId);
    setIsValidated(cleanValues.isValidated);
    setValidationStatus(cleanValues.validationStatus);
    setValidationComment(cleanValues.validationComment);
    setValidationRating(cleanValues.validationRating);
    setValidatedBy(cleanValues.validatedBy);
    setValidatedAt(cleanValues.validatedAt);
    setErrors({});
  };
  const [recordedPhraseRecord, setRecordedPhraseRecord] = React.useState(
    recordedPhraseModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(RecordedPhrase, idProp)
        : recordedPhraseModelProp;
      setRecordedPhraseRecord(record);
    };
    queryData();
  }, [idProp, recordedPhraseModelProp]);
  React.useEffect(resetStateValues, [recordedPhraseRecord]);
  const validations = {
    phraseId: [],
    phraseSetId: [],
    identityId: [],
    uuid: [],
    postgresId: [],
    filepath: [],
    recordedTime: [],
    languageId: [],
    isValidated: [],
    validationStatus: [],
    validationComment: [],
    validationRating: [],
    validatedBy: [],
    validatedAt: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          identityId,
          uuid,
          postgresId,
          filepath,
          recordedTime,
          languageId,
          isValidated,
          validationStatus,
          validationComment,
          validationRating,
          validatedBy,
          validatedAt,
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
            RecordedPhrase.copyOf(recordedPhraseRecord, (updated) => {
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
      {...getOverrideProps(overrides, "RecordedPhraseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Phrase id"
        isRequired={false}
        isReadOnly={false}
        value={phraseId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId: value,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
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
        value={phraseSetId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId: value,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
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
        label="Identity id"
        isRequired={false}
        isReadOnly={false}
        value={identityId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId: value,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.identityId ?? value;
          }
          if (errors.identityId?.hasError) {
            runValidationTasks("identityId", value);
          }
          setIdentityId(value);
        }}
        onBlur={() => runValidationTasks("identityId", identityId)}
        errorMessage={errors.identityId?.errorMessage}
        hasError={errors.identityId?.hasError}
        {...getOverrideProps(overrides, "identityId")}
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
              phraseId,
              phraseSetId,
              identityId,
              uuid: value,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
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
        label="Postgres id"
        isRequired={false}
        isReadOnly={false}
        value={postgresId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId: value,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.postgresId ?? value;
          }
          if (errors.postgresId?.hasError) {
            runValidationTasks("postgresId", value);
          }
          setPostgresId(value);
        }}
        onBlur={() => runValidationTasks("postgresId", postgresId)}
        errorMessage={errors.postgresId?.errorMessage}
        hasError={errors.postgresId?.hasError}
        {...getOverrideProps(overrides, "postgresId")}
      ></TextField>
      <TextField
        label="Filepath"
        isRequired={false}
        isReadOnly={false}
        value={filepath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath: value,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.filepath ?? value;
          }
          if (errors.filepath?.hasError) {
            runValidationTasks("filepath", value);
          }
          setFilepath(value);
        }}
        onBlur={() => runValidationTasks("filepath", filepath)}
        errorMessage={errors.filepath?.errorMessage}
        hasError={errors.filepath?.hasError}
        {...getOverrideProps(overrides, "filepath")}
      ></TextField>
      <TextField
        label="Recorded time"
        isRequired={false}
        isReadOnly={false}
        value={recordedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime: value,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.recordedTime ?? value;
          }
          if (errors.recordedTime?.hasError) {
            runValidationTasks("recordedTime", value);
          }
          setRecordedTime(value);
        }}
        onBlur={() => runValidationTasks("recordedTime", recordedTime)}
        errorMessage={errors.recordedTime?.errorMessage}
        hasError={errors.recordedTime?.hasError}
        {...getOverrideProps(overrides, "recordedTime")}
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
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId: value,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
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
      <SwitchField
        label="Is validated"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isValidated}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated: value,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isValidated ?? value;
          }
          if (errors.isValidated?.hasError) {
            runValidationTasks("isValidated", value);
          }
          setIsValidated(value);
        }}
        onBlur={() => runValidationTasks("isValidated", isValidated)}
        errorMessage={errors.isValidated?.errorMessage}
        hasError={errors.isValidated?.hasError}
        {...getOverrideProps(overrides, "isValidated")}
      ></SwitchField>
      <TextField
        label="Validation status"
        isRequired={false}
        isReadOnly={false}
        value={validationStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus: value,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.validationStatus ?? value;
          }
          if (errors.validationStatus?.hasError) {
            runValidationTasks("validationStatus", value);
          }
          setValidationStatus(value);
        }}
        onBlur={() => runValidationTasks("validationStatus", validationStatus)}
        errorMessage={errors.validationStatus?.errorMessage}
        hasError={errors.validationStatus?.hasError}
        {...getOverrideProps(overrides, "validationStatus")}
      ></TextField>
      <TextField
        label="Validation comment"
        isRequired={false}
        isReadOnly={false}
        value={validationComment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment: value,
              validationRating,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.validationComment ?? value;
          }
          if (errors.validationComment?.hasError) {
            runValidationTasks("validationComment", value);
          }
          setValidationComment(value);
        }}
        onBlur={() =>
          runValidationTasks("validationComment", validationComment)
        }
        errorMessage={errors.validationComment?.errorMessage}
        hasError={errors.validationComment?.hasError}
        {...getOverrideProps(overrides, "validationComment")}
      ></TextField>
      <TextField
        label="Validation rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={validationRating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating: value,
              validatedBy,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.validationRating ?? value;
          }
          if (errors.validationRating?.hasError) {
            runValidationTasks("validationRating", value);
          }
          setValidationRating(value);
        }}
        onBlur={() => runValidationTasks("validationRating", validationRating)}
        errorMessage={errors.validationRating?.errorMessage}
        hasError={errors.validationRating?.hasError}
        {...getOverrideProps(overrides, "validationRating")}
      ></TextField>
      <TextField
        label="Validated by"
        isRequired={false}
        isReadOnly={false}
        value={validatedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy: value,
              validatedAt,
            };
            const result = onChange(modelFields);
            value = result?.validatedBy ?? value;
          }
          if (errors.validatedBy?.hasError) {
            runValidationTasks("validatedBy", value);
          }
          setValidatedBy(value);
        }}
        onBlur={() => runValidationTasks("validatedBy", validatedBy)}
        errorMessage={errors.validatedBy?.errorMessage}
        hasError={errors.validatedBy?.hasError}
        {...getOverrideProps(overrides, "validatedBy")}
      ></TextField>
      <TextField
        label="Validated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={validatedAt && convertToLocal(new Date(validatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              phraseId,
              phraseSetId,
              identityId,
              uuid,
              postgresId,
              filepath,
              recordedTime,
              languageId,
              isValidated,
              validationStatus,
              validationComment,
              validationRating,
              validatedBy,
              validatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.validatedAt ?? value;
          }
          if (errors.validatedAt?.hasError) {
            runValidationTasks("validatedAt", value);
          }
          setValidatedAt(value);
        }}
        onBlur={() => runValidationTasks("validatedAt", validatedAt)}
        errorMessage={errors.validatedAt?.errorMessage}
        hasError={errors.validatedAt?.hasError}
        {...getOverrideProps(overrides, "validatedAt")}
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
          isDisabled={!(idProp || recordedPhraseModelProp)}
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
              !(idProp || recordedPhraseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
