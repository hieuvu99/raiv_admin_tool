/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUploaderFileHistory = /* GraphQL */ `mutation CreateUploaderFileHistory(
  $input: CreateUploaderFileHistoryInput!
  $condition: ModelUploaderFileHistoryConditionInput
) {
  createUploaderFileHistory(input: $input, condition: $condition) {
    id
    email
    uuid
    fileName
    fileSize
    downloadUrl
    timeStamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUploaderFileHistoryMutationVariables,
  APITypes.CreateUploaderFileHistoryMutation
>;
export const updateUploaderFileHistory = /* GraphQL */ `mutation UpdateUploaderFileHistory(
  $input: UpdateUploaderFileHistoryInput!
  $condition: ModelUploaderFileHistoryConditionInput
) {
  updateUploaderFileHistory(input: $input, condition: $condition) {
    id
    email
    uuid
    fileName
    fileSize
    downloadUrl
    timeStamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUploaderFileHistoryMutationVariables,
  APITypes.UpdateUploaderFileHistoryMutation
>;
export const deleteUploaderFileHistory = /* GraphQL */ `mutation DeleteUploaderFileHistory(
  $input: DeleteUploaderFileHistoryInput!
  $condition: ModelUploaderFileHistoryConditionInput
) {
  deleteUploaderFileHistory(input: $input, condition: $condition) {
    id
    email
    uuid
    fileName
    fileSize
    downloadUrl
    timeStamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUploaderFileHistoryMutationVariables,
  APITypes.DeleteUploaderFileHistoryMutation
>;
export const createUploaderUserInfo = /* GraphQL */ `mutation CreateUploaderUserInfo(
  $input: CreateUploaderUserInfoInput!
  $condition: ModelUploaderUserInfoConditionInput
) {
  createUploaderUserInfo(input: $input, condition: $condition) {
    id
    uuid
    name
    email
    isActive
    isAdmin
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUploaderUserInfoMutationVariables,
  APITypes.CreateUploaderUserInfoMutation
>;
export const updateUploaderUserInfo = /* GraphQL */ `mutation UpdateUploaderUserInfo(
  $input: UpdateUploaderUserInfoInput!
  $condition: ModelUploaderUserInfoConditionInput
) {
  updateUploaderUserInfo(input: $input, condition: $condition) {
    id
    uuid
    name
    email
    isActive
    isAdmin
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUploaderUserInfoMutationVariables,
  APITypes.UpdateUploaderUserInfoMutation
>;
export const deleteUploaderUserInfo = /* GraphQL */ `mutation DeleteUploaderUserInfo(
  $input: DeleteUploaderUserInfoInput!
  $condition: ModelUploaderUserInfoConditionInput
) {
  deleteUploaderUserInfo(input: $input, condition: $condition) {
    id
    uuid
    name
    email
    isActive
    isAdmin
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUploaderUserInfoMutationVariables,
  APITypes.DeleteUploaderUserInfoMutation
>;
export const createCliQueryData = /* GraphQL */ `mutation CreateCliQueryData(
  $input: CreateCliQueryDataInput!
  $condition: ModelCliQueryDataConditionInput
) {
  createCliQueryData(input: $input, condition: $condition) {
    id
    uuid
    title
    decscription
    gender
    transgender
    education
    languageId
    languageFluency
    miniCourse
    speechDisorders
    downloadUrl
    status
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCliQueryDataMutationVariables,
  APITypes.CreateCliQueryDataMutation
>;
export const updateCliQueryData = /* GraphQL */ `mutation UpdateCliQueryData(
  $input: UpdateCliQueryDataInput!
  $condition: ModelCliQueryDataConditionInput
) {
  updateCliQueryData(input: $input, condition: $condition) {
    id
    uuid
    title
    decscription
    gender
    transgender
    education
    languageId
    languageFluency
    miniCourse
    speechDisorders
    downloadUrl
    status
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCliQueryDataMutationVariables,
  APITypes.UpdateCliQueryDataMutation
>;
export const deleteCliQueryData = /* GraphQL */ `mutation DeleteCliQueryData(
  $input: DeleteCliQueryDataInput!
  $condition: ModelCliQueryDataConditionInput
) {
  deleteCliQueryData(input: $input, condition: $condition) {
    id
    uuid
    title
    decscription
    gender
    transgender
    education
    languageId
    languageFluency
    miniCourse
    speechDisorders
    downloadUrl
    status
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCliQueryDataMutationVariables,
  APITypes.DeleteCliQueryDataMutation
>;
export const createAppConfig = /* GraphQL */ `mutation CreateAppConfig(
  $input: CreateAppConfigInput!
  $condition: ModelAppConfigConditionInput
) {
  createAppConfig(input: $input, condition: $condition) {
    id
    maxSetsSize
    allowSkip
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAppConfigMutationVariables,
  APITypes.CreateAppConfigMutation
>;
export const updateAppConfig = /* GraphQL */ `mutation UpdateAppConfig(
  $input: UpdateAppConfigInput!
  $condition: ModelAppConfigConditionInput
) {
  updateAppConfig(input: $input, condition: $condition) {
    id
    maxSetsSize
    allowSkip
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAppConfigMutationVariables,
  APITypes.UpdateAppConfigMutation
>;
export const deleteAppConfig = /* GraphQL */ `mutation DeleteAppConfig(
  $input: DeleteAppConfigInput!
  $condition: ModelAppConfigConditionInput
) {
  deleteAppConfig(input: $input, condition: $condition) {
    id
    maxSetsSize
    allowSkip
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAppConfigMutationVariables,
  APITypes.DeleteAppConfigMutation
>;
export const createRecordedPhrase = /* GraphQL */ `mutation CreateRecordedPhrase(
  $input: CreateRecordedPhraseInput!
  $condition: ModelRecordedPhraseConditionInput
) {
  createRecordedPhrase(input: $input, condition: $condition) {
    id
    phraseId
    phraseSetId
    identityId
    uuid
    postgresId
    filepath
    recordedTime
    languageId
    isValidated
    validationStatus
    validationComment
    validationRating
    validatedBy
    validatedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRecordedPhraseMutationVariables,
  APITypes.CreateRecordedPhraseMutation
>;
export const updateRecordedPhrase = /* GraphQL */ `mutation UpdateRecordedPhrase(
  $input: UpdateRecordedPhraseInput!
  $condition: ModelRecordedPhraseConditionInput
) {
  updateRecordedPhrase(input: $input, condition: $condition) {
    id
    phraseId
    phraseSetId
    identityId
    uuid
    postgresId
    filepath
    recordedTime
    languageId
    isValidated
    validationStatus
    validationComment
    validationRating
    validatedBy
    validatedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRecordedPhraseMutationVariables,
  APITypes.UpdateRecordedPhraseMutation
>;
export const deleteRecordedPhrase = /* GraphQL */ `mutation DeleteRecordedPhrase(
  $input: DeleteRecordedPhraseInput!
  $condition: ModelRecordedPhraseConditionInput
) {
  deleteRecordedPhrase(input: $input, condition: $condition) {
    id
    phraseId
    phraseSetId
    identityId
    uuid
    postgresId
    filepath
    recordedTime
    languageId
    isValidated
    validationStatus
    validationComment
    validationRating
    validatedBy
    validatedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRecordedPhraseMutationVariables,
  APITypes.DeleteRecordedPhraseMutation
>;
export const createFeedbackData = /* GraphQL */ `mutation CreateFeedbackData(
  $input: CreateFeedbackDataInput!
  $condition: ModelFeedbackDataConditionInput
) {
  createFeedbackData(input: $input, condition: $condition) {
    id
    uid
    identityId
    firstName
    lastName
    email
    message
    date
    isCompleted
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackDataMutationVariables,
  APITypes.CreateFeedbackDataMutation
>;
export const updateFeedbackData = /* GraphQL */ `mutation UpdateFeedbackData(
  $input: UpdateFeedbackDataInput!
  $condition: ModelFeedbackDataConditionInput
) {
  updateFeedbackData(input: $input, condition: $condition) {
    id
    uid
    identityId
    firstName
    lastName
    email
    message
    date
    isCompleted
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackDataMutationVariables,
  APITypes.UpdateFeedbackDataMutation
>;
export const deleteFeedbackData = /* GraphQL */ `mutation DeleteFeedbackData(
  $input: DeleteFeedbackDataInput!
  $condition: ModelFeedbackDataConditionInput
) {
  deleteFeedbackData(input: $input, condition: $condition) {
    id
    uid
    identityId
    firstName
    lastName
    email
    message
    date
    isCompleted
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackDataMutationVariables,
  APITypes.DeleteFeedbackDataMutation
>;
export const createUserInfo = /* GraphQL */ `mutation CreateUserInfo(
  $input: CreateUserInfoInput!
  $condition: ModelUserInfoConditionInput
) {
  createUserInfo(input: $input, condition: $condition) {
    id
    languageId
    firstName
    lastName
    email
    phraseSubsetIndex
    project
    dob
    gender
    geographicLocation
    firstLanguage
    fluency
    education
    priorMinCourseTraining
    speechDisorders
    isTransgender
    uid
    isAdmin
    isActive
    identityId
    enabledDailyReminder
    reminderTime
    postgresId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserInfoMutationVariables,
  APITypes.CreateUserInfoMutation
>;
export const updateUserInfo = /* GraphQL */ `mutation UpdateUserInfo(
  $input: UpdateUserInfoInput!
  $condition: ModelUserInfoConditionInput
) {
  updateUserInfo(input: $input, condition: $condition) {
    id
    languageId
    firstName
    lastName
    email
    phraseSubsetIndex
    project
    dob
    gender
    geographicLocation
    firstLanguage
    fluency
    education
    priorMinCourseTraining
    speechDisorders
    isTransgender
    uid
    isAdmin
    isActive
    identityId
    enabledDailyReminder
    reminderTime
    postgresId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserInfoMutationVariables,
  APITypes.UpdateUserInfoMutation
>;
export const deleteUserInfo = /* GraphQL */ `mutation DeleteUserInfo(
  $input: DeleteUserInfoInput!
  $condition: ModelUserInfoConditionInput
) {
  deleteUserInfo(input: $input, condition: $condition) {
    id
    languageId
    firstName
    lastName
    email
    phraseSubsetIndex
    project
    dob
    gender
    geographicLocation
    firstLanguage
    fluency
    education
    priorMinCourseTraining
    speechDisorders
    isTransgender
    uid
    isAdmin
    isActive
    identityId
    enabledDailyReminder
    reminderTime
    postgresId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserInfoMutationVariables,
  APITypes.DeleteUserInfoMutation
>;
export const createKwakwalaPhraseDB = /* GraphQL */ `mutation CreateKwakwalaPhraseDB(
  $input: CreateKwakwalaPhraseDBInput!
  $condition: ModelKwakwalaPhraseDBConditionInput
) {
  createKwakwalaPhraseDB(input: $input, condition: $condition) {
    id
    phraseId
    phraseSetId
    description
    original
    translated
    enabled
    languageId
    exampleAudioPath
    recording1Start
    recording1Stop
    recording2Start
    recording2Stop
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateKwakwalaPhraseDBMutationVariables,
  APITypes.CreateKwakwalaPhraseDBMutation
>;
export const updateKwakwalaPhraseDB = /* GraphQL */ `mutation UpdateKwakwalaPhraseDB(
  $input: UpdateKwakwalaPhraseDBInput!
  $condition: ModelKwakwalaPhraseDBConditionInput
) {
  updateKwakwalaPhraseDB(input: $input, condition: $condition) {
    id
    phraseId
    phraseSetId
    description
    original
    translated
    enabled
    languageId
    exampleAudioPath
    recording1Start
    recording1Stop
    recording2Start
    recording2Stop
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateKwakwalaPhraseDBMutationVariables,
  APITypes.UpdateKwakwalaPhraseDBMutation
>;
export const deleteKwakwalaPhraseDB = /* GraphQL */ `mutation DeleteKwakwalaPhraseDB(
  $input: DeleteKwakwalaPhraseDBInput!
  $condition: ModelKwakwalaPhraseDBConditionInput
) {
  deleteKwakwalaPhraseDB(input: $input, condition: $condition) {
    id
    phraseId
    phraseSetId
    description
    original
    translated
    enabled
    languageId
    exampleAudioPath
    recording1Start
    recording1Stop
    recording2Start
    recording2Stop
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteKwakwalaPhraseDBMutationVariables,
  APITypes.DeleteKwakwalaPhraseDBMutation
>;
