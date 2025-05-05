/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUploaderFileHistory = /* GraphQL */ `subscription OnCreateUploaderFileHistory(
  $filter: ModelSubscriptionUploaderFileHistoryFilterInput
) {
  onCreateUploaderFileHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUploaderFileHistorySubscriptionVariables,
  APITypes.OnCreateUploaderFileHistorySubscription
>;
export const onUpdateUploaderFileHistory = /* GraphQL */ `subscription OnUpdateUploaderFileHistory(
  $filter: ModelSubscriptionUploaderFileHistoryFilterInput
) {
  onUpdateUploaderFileHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUploaderFileHistorySubscriptionVariables,
  APITypes.OnUpdateUploaderFileHistorySubscription
>;
export const onDeleteUploaderFileHistory = /* GraphQL */ `subscription OnDeleteUploaderFileHistory(
  $filter: ModelSubscriptionUploaderFileHistoryFilterInput
) {
  onDeleteUploaderFileHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUploaderFileHistorySubscriptionVariables,
  APITypes.OnDeleteUploaderFileHistorySubscription
>;
export const onCreateUploaderUserInfo = /* GraphQL */ `subscription OnCreateUploaderUserInfo(
  $filter: ModelSubscriptionUploaderUserInfoFilterInput
) {
  onCreateUploaderUserInfo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUploaderUserInfoSubscriptionVariables,
  APITypes.OnCreateUploaderUserInfoSubscription
>;
export const onUpdateUploaderUserInfo = /* GraphQL */ `subscription OnUpdateUploaderUserInfo(
  $filter: ModelSubscriptionUploaderUserInfoFilterInput
) {
  onUpdateUploaderUserInfo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUploaderUserInfoSubscriptionVariables,
  APITypes.OnUpdateUploaderUserInfoSubscription
>;
export const onDeleteUploaderUserInfo = /* GraphQL */ `subscription OnDeleteUploaderUserInfo(
  $filter: ModelSubscriptionUploaderUserInfoFilterInput
) {
  onDeleteUploaderUserInfo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUploaderUserInfoSubscriptionVariables,
  APITypes.OnDeleteUploaderUserInfoSubscription
>;
export const onCreateCliQueryData = /* GraphQL */ `subscription OnCreateCliQueryData(
  $filter: ModelSubscriptionCliQueryDataFilterInput
) {
  onCreateCliQueryData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCliQueryDataSubscriptionVariables,
  APITypes.OnCreateCliQueryDataSubscription
>;
export const onUpdateCliQueryData = /* GraphQL */ `subscription OnUpdateCliQueryData(
  $filter: ModelSubscriptionCliQueryDataFilterInput
) {
  onUpdateCliQueryData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCliQueryDataSubscriptionVariables,
  APITypes.OnUpdateCliQueryDataSubscription
>;
export const onDeleteCliQueryData = /* GraphQL */ `subscription OnDeleteCliQueryData(
  $filter: ModelSubscriptionCliQueryDataFilterInput
) {
  onDeleteCliQueryData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCliQueryDataSubscriptionVariables,
  APITypes.OnDeleteCliQueryDataSubscription
>;
export const onCreateAppConfig = /* GraphQL */ `subscription OnCreateAppConfig($filter: ModelSubscriptionAppConfigFilterInput) {
  onCreateAppConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAppConfigSubscriptionVariables,
  APITypes.OnCreateAppConfigSubscription
>;
export const onUpdateAppConfig = /* GraphQL */ `subscription OnUpdateAppConfig($filter: ModelSubscriptionAppConfigFilterInput) {
  onUpdateAppConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAppConfigSubscriptionVariables,
  APITypes.OnUpdateAppConfigSubscription
>;
export const onDeleteAppConfig = /* GraphQL */ `subscription OnDeleteAppConfig($filter: ModelSubscriptionAppConfigFilterInput) {
  onDeleteAppConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAppConfigSubscriptionVariables,
  APITypes.OnDeleteAppConfigSubscription
>;
export const onCreateRecordedPhrase = /* GraphQL */ `subscription OnCreateRecordedPhrase(
  $filter: ModelSubscriptionRecordedPhraseFilterInput
  $owner: String
) {
  onCreateRecordedPhrase(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecordedPhraseSubscriptionVariables,
  APITypes.OnCreateRecordedPhraseSubscription
>;
export const onUpdateRecordedPhrase = /* GraphQL */ `subscription OnUpdateRecordedPhrase(
  $filter: ModelSubscriptionRecordedPhraseFilterInput
  $owner: String
) {
  onUpdateRecordedPhrase(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecordedPhraseSubscriptionVariables,
  APITypes.OnUpdateRecordedPhraseSubscription
>;
export const onDeleteRecordedPhrase = /* GraphQL */ `subscription OnDeleteRecordedPhrase(
  $filter: ModelSubscriptionRecordedPhraseFilterInput
  $owner: String
) {
  onDeleteRecordedPhrase(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecordedPhraseSubscriptionVariables,
  APITypes.OnDeleteRecordedPhraseSubscription
>;
export const onCreateFeedbackData = /* GraphQL */ `subscription OnCreateFeedbackData(
  $filter: ModelSubscriptionFeedbackDataFilterInput
  $owner: String
) {
  onCreateFeedbackData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackDataSubscriptionVariables,
  APITypes.OnCreateFeedbackDataSubscription
>;
export const onUpdateFeedbackData = /* GraphQL */ `subscription OnUpdateFeedbackData(
  $filter: ModelSubscriptionFeedbackDataFilterInput
  $owner: String
) {
  onUpdateFeedbackData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackDataSubscriptionVariables,
  APITypes.OnUpdateFeedbackDataSubscription
>;
export const onDeleteFeedbackData = /* GraphQL */ `subscription OnDeleteFeedbackData(
  $filter: ModelSubscriptionFeedbackDataFilterInput
  $owner: String
) {
  onDeleteFeedbackData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackDataSubscriptionVariables,
  APITypes.OnDeleteFeedbackDataSubscription
>;
export const onCreateUserInfo = /* GraphQL */ `subscription OnCreateUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onCreateUserInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserInfoSubscriptionVariables,
  APITypes.OnCreateUserInfoSubscription
>;
export const onUpdateUserInfo = /* GraphQL */ `subscription OnUpdateUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onUpdateUserInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserInfoSubscriptionVariables,
  APITypes.OnUpdateUserInfoSubscription
>;
export const onDeleteUserInfo = /* GraphQL */ `subscription OnDeleteUserInfo(
  $filter: ModelSubscriptionUserInfoFilterInput
  $owner: String
) {
  onDeleteUserInfo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserInfoSubscriptionVariables,
  APITypes.OnDeleteUserInfoSubscription
>;
export const onCreateKwakwalaPhraseDB = /* GraphQL */ `subscription OnCreateKwakwalaPhraseDB(
  $filter: ModelSubscriptionKwakwalaPhraseDBFilterInput
  $owner: String
) {
  onCreateKwakwalaPhraseDB(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateKwakwalaPhraseDBSubscriptionVariables,
  APITypes.OnCreateKwakwalaPhraseDBSubscription
>;
export const onUpdateKwakwalaPhraseDB = /* GraphQL */ `subscription OnUpdateKwakwalaPhraseDB(
  $filter: ModelSubscriptionKwakwalaPhraseDBFilterInput
  $owner: String
) {
  onUpdateKwakwalaPhraseDB(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateKwakwalaPhraseDBSubscriptionVariables,
  APITypes.OnUpdateKwakwalaPhraseDBSubscription
>;
export const onDeleteKwakwalaPhraseDB = /* GraphQL */ `subscription OnDeleteKwakwalaPhraseDB(
  $filter: ModelSubscriptionKwakwalaPhraseDBFilterInput
  $owner: String
) {
  onDeleteKwakwalaPhraseDB(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteKwakwalaPhraseDBSubscriptionVariables,
  APITypes.OnDeleteKwakwalaPhraseDBSubscription
>;
