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
import { UserInfo } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UserInfoCreateForm(props) {
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
    languageId: "",
    firstName: "",
    lastName: "",
    email: "",
    phraseSubsetIndex: "",
    project: "",
    dob: "",
    gender: "",
    geographicLocation: "",
    firstLanguage: "",
    fluency: "",
    education: "",
    priorMinCourseTraining: "",
    speechDisorders: "",
    isTransgender: "",
    uid: "",
    isAdmin: false,
    isActive: false,
    identityId: "",
    enabledDailyReminder: false,
    reminderTime: "",
    postgresId: "",
  };
  const [languageId, setLanguageId] = React.useState(initialValues.languageId);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phraseSubsetIndex, setPhraseSubsetIndex] = React.useState(
    initialValues.phraseSubsetIndex
  );
  const [project, setProject] = React.useState(initialValues.project);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [geographicLocation, setGeographicLocation] = React.useState(
    initialValues.geographicLocation
  );
  const [firstLanguage, setFirstLanguage] = React.useState(
    initialValues.firstLanguage
  );
  const [fluency, setFluency] = React.useState(initialValues.fluency);
  const [education, setEducation] = React.useState(initialValues.education);
  const [priorMinCourseTraining, setPriorMinCourseTraining] = React.useState(
    initialValues.priorMinCourseTraining
  );
  const [speechDisorders, setSpeechDisorders] = React.useState(
    initialValues.speechDisorders
  );
  const [isTransgender, setIsTransgender] = React.useState(
    initialValues.isTransgender
  );
  const [uid, setUid] = React.useState(initialValues.uid);
  const [isAdmin, setIsAdmin] = React.useState(initialValues.isAdmin);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [identityId, setIdentityId] = React.useState(initialValues.identityId);
  const [enabledDailyReminder, setEnabledDailyReminder] = React.useState(
    initialValues.enabledDailyReminder
  );
  const [reminderTime, setReminderTime] = React.useState(
    initialValues.reminderTime
  );
  const [postgresId, setPostgresId] = React.useState(initialValues.postgresId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLanguageId(initialValues.languageId);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmail(initialValues.email);
    setPhraseSubsetIndex(initialValues.phraseSubsetIndex);
    setProject(initialValues.project);
    setDob(initialValues.dob);
    setGender(initialValues.gender);
    setGeographicLocation(initialValues.geographicLocation);
    setFirstLanguage(initialValues.firstLanguage);
    setFluency(initialValues.fluency);
    setEducation(initialValues.education);
    setPriorMinCourseTraining(initialValues.priorMinCourseTraining);
    setSpeechDisorders(initialValues.speechDisorders);
    setIsTransgender(initialValues.isTransgender);
    setUid(initialValues.uid);
    setIsAdmin(initialValues.isAdmin);
    setIsActive(initialValues.isActive);
    setIdentityId(initialValues.identityId);
    setEnabledDailyReminder(initialValues.enabledDailyReminder);
    setReminderTime(initialValues.reminderTime);
    setPostgresId(initialValues.postgresId);
    setErrors({});
  };
  const validations = {
    languageId: [],
    firstName: [],
    lastName: [],
    email: [],
    phraseSubsetIndex: [],
    project: [],
    dob: [],
    gender: [],
    geographicLocation: [],
    firstLanguage: [],
    fluency: [],
    education: [],
    priorMinCourseTraining: [],
    speechDisorders: [],
    isTransgender: [],
    uid: [],
    isAdmin: [],
    isActive: [],
    identityId: [],
    enabledDailyReminder: [],
    reminderTime: [],
    postgresId: [],
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
          languageId,
          firstName,
          lastName,
          email,
          phraseSubsetIndex,
          project,
          dob,
          gender,
          geographicLocation,
          firstLanguage,
          fluency,
          education,
          priorMinCourseTraining,
          speechDisorders,
          isTransgender,
          uid,
          isAdmin,
          isActive,
          identityId,
          enabledDailyReminder,
          reminderTime,
          postgresId,
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
          await DataStore.save(new UserInfo(modelFields));
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
      {...getOverrideProps(overrides, "UserInfoCreateForm")}
      {...rest}
    >
      <TextField
        label="Language id"
        isRequired={false}
        isReadOnly={false}
        value={languageId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId: value,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
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
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName: value,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName: value,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email: value,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
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
        label="Phrase subset index"
        isRequired={false}
        isReadOnly={false}
        value={phraseSubsetIndex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex: value,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.phraseSubsetIndex ?? value;
          }
          if (errors.phraseSubsetIndex?.hasError) {
            runValidationTasks("phraseSubsetIndex", value);
          }
          setPhraseSubsetIndex(value);
        }}
        onBlur={() =>
          runValidationTasks("phraseSubsetIndex", phraseSubsetIndex)
        }
        errorMessage={errors.phraseSubsetIndex?.errorMessage}
        hasError={errors.phraseSubsetIndex?.hasError}
        {...getOverrideProps(overrides, "phraseSubsetIndex")}
      ></TextField>
      <TextField
        label="Project"
        isRequired={false}
        isReadOnly={false}
        value={project}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project: value,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.project ?? value;
          }
          if (errors.project?.hasError) {
            runValidationTasks("project", value);
          }
          setProject(value);
        }}
        onBlur={() => runValidationTasks("project", project)}
        errorMessage={errors.project?.errorMessage}
        hasError={errors.project?.hasError}
        {...getOverrideProps(overrides, "project")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob: value,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
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
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender: value,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
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
        label="Geographic location"
        isRequired={false}
        isReadOnly={false}
        value={geographicLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation: value,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.geographicLocation ?? value;
          }
          if (errors.geographicLocation?.hasError) {
            runValidationTasks("geographicLocation", value);
          }
          setGeographicLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("geographicLocation", geographicLocation)
        }
        errorMessage={errors.geographicLocation?.errorMessage}
        hasError={errors.geographicLocation?.hasError}
        {...getOverrideProps(overrides, "geographicLocation")}
      ></TextField>
      <TextField
        label="First language"
        isRequired={false}
        isReadOnly={false}
        value={firstLanguage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage: value,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.firstLanguage ?? value;
          }
          if (errors.firstLanguage?.hasError) {
            runValidationTasks("firstLanguage", value);
          }
          setFirstLanguage(value);
        }}
        onBlur={() => runValidationTasks("firstLanguage", firstLanguage)}
        errorMessage={errors.firstLanguage?.errorMessage}
        hasError={errors.firstLanguage?.hasError}
        {...getOverrideProps(overrides, "firstLanguage")}
      ></TextField>
      <TextField
        label="Fluency"
        isRequired={false}
        isReadOnly={false}
        value={fluency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency: value,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.fluency ?? value;
          }
          if (errors.fluency?.hasError) {
            runValidationTasks("fluency", value);
          }
          setFluency(value);
        }}
        onBlur={() => runValidationTasks("fluency", fluency)}
        errorMessage={errors.fluency?.errorMessage}
        hasError={errors.fluency?.hasError}
        {...getOverrideProps(overrides, "fluency")}
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
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education: value,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
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
        label="Prior min course training"
        isRequired={false}
        isReadOnly={false}
        value={priorMinCourseTraining}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining: value,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.priorMinCourseTraining ?? value;
          }
          if (errors.priorMinCourseTraining?.hasError) {
            runValidationTasks("priorMinCourseTraining", value);
          }
          setPriorMinCourseTraining(value);
        }}
        onBlur={() =>
          runValidationTasks("priorMinCourseTraining", priorMinCourseTraining)
        }
        errorMessage={errors.priorMinCourseTraining?.errorMessage}
        hasError={errors.priorMinCourseTraining?.hasError}
        {...getOverrideProps(overrides, "priorMinCourseTraining")}
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
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders: value,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
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
        label="Is transgender"
        isRequired={false}
        isReadOnly={false}
        value={isTransgender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender: value,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.isTransgender ?? value;
          }
          if (errors.isTransgender?.hasError) {
            runValidationTasks("isTransgender", value);
          }
          setIsTransgender(value);
        }}
        onBlur={() => runValidationTasks("isTransgender", isTransgender)}
        errorMessage={errors.isTransgender?.errorMessage}
        hasError={errors.isTransgender?.hasError}
        {...getOverrideProps(overrides, "isTransgender")}
      ></TextField>
      <TextField
        label="Uid"
        isRequired={false}
        isReadOnly={false}
        value={uid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid: value,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.uid ?? value;
          }
          if (errors.uid?.hasError) {
            runValidationTasks("uid", value);
          }
          setUid(value);
        }}
        onBlur={() => runValidationTasks("uid", uid)}
        errorMessage={errors.uid?.errorMessage}
        hasError={errors.uid?.hasError}
        {...getOverrideProps(overrides, "uid")}
      ></TextField>
      <SwitchField
        label="Is admin"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAdmin}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin: value,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.isAdmin ?? value;
          }
          if (errors.isAdmin?.hasError) {
            runValidationTasks("isAdmin", value);
          }
          setIsAdmin(value);
        }}
        onBlur={() => runValidationTasks("isAdmin", isAdmin)}
        errorMessage={errors.isAdmin?.errorMessage}
        hasError={errors.isAdmin?.hasError}
        {...getOverrideProps(overrides, "isAdmin")}
      ></SwitchField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive: value,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <TextField
        label="Identity id"
        isRequired={false}
        isReadOnly={false}
        value={identityId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId: value,
              enabledDailyReminder,
              reminderTime,
              postgresId,
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
      <SwitchField
        label="Enabled daily reminder"
        defaultChecked={false}
        isDisabled={false}
        isChecked={enabledDailyReminder}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder: value,
              reminderTime,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.enabledDailyReminder ?? value;
          }
          if (errors.enabledDailyReminder?.hasError) {
            runValidationTasks("enabledDailyReminder", value);
          }
          setEnabledDailyReminder(value);
        }}
        onBlur={() =>
          runValidationTasks("enabledDailyReminder", enabledDailyReminder)
        }
        errorMessage={errors.enabledDailyReminder?.errorMessage}
        hasError={errors.enabledDailyReminder?.hasError}
        {...getOverrideProps(overrides, "enabledDailyReminder")}
      ></SwitchField>
      <TextField
        label="Reminder time"
        isRequired={false}
        isReadOnly={false}
        value={reminderTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime: value,
              postgresId,
            };
            const result = onChange(modelFields);
            value = result?.reminderTime ?? value;
          }
          if (errors.reminderTime?.hasError) {
            runValidationTasks("reminderTime", value);
          }
          setReminderTime(value);
        }}
        onBlur={() => runValidationTasks("reminderTime", reminderTime)}
        errorMessage={errors.reminderTime?.errorMessage}
        hasError={errors.reminderTime?.hasError}
        {...getOverrideProps(overrides, "reminderTime")}
      ></TextField>
      <TextField
        label="Postgres id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={postgresId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              languageId,
              firstName,
              lastName,
              email,
              phraseSubsetIndex,
              project,
              dob,
              gender,
              geographicLocation,
              firstLanguage,
              fluency,
              education,
              priorMinCourseTraining,
              speechDisorders,
              isTransgender,
              uid,
              isAdmin,
              isActive,
              identityId,
              enabledDailyReminder,
              reminderTime,
              postgresId: value,
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
