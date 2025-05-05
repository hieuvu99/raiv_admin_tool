/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUploaderFileHistory = /* GraphQL */ `query GetUploaderFileHistory($id: ID!) {
  getUploaderFileHistory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUploaderFileHistoryQueryVariables,
  APITypes.GetUploaderFileHistoryQuery
>;
export const listUploaderFileHistories = /* GraphQL */ `query ListUploaderFileHistories(
  $filter: ModelUploaderFileHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listUploaderFileHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUploaderFileHistoriesQueryVariables,
  APITypes.ListUploaderFileHistoriesQuery
>;
export const syncUploaderFileHistories = /* GraphQL */ `query SyncUploaderFileHistories(
  $filter: ModelUploaderFileHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUploaderFileHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUploaderFileHistoriesQueryVariables,
  APITypes.SyncUploaderFileHistoriesQuery
>;
export const getUploaderUserInfo = /* GraphQL */ `query GetUploaderUserInfo($id: ID!) {
  getUploaderUserInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUploaderUserInfoQueryVariables,
  APITypes.GetUploaderUserInfoQuery
>;
export const listUploaderUserInfos = /* GraphQL */ `query ListUploaderUserInfos(
  $filter: ModelUploaderUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUploaderUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUploaderUserInfosQueryVariables,
  APITypes.ListUploaderUserInfosQuery
>;
export const syncUploaderUserInfos = /* GraphQL */ `query SyncUploaderUserInfos(
  $filter: ModelUploaderUserInfoFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUploaderUserInfos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUploaderUserInfosQueryVariables,
  APITypes.SyncUploaderUserInfosQuery
>;
export const getCliQueryData = /* GraphQL */ `query GetCliQueryData($id: ID!) {
  getCliQueryData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCliQueryDataQueryVariables,
  APITypes.GetCliQueryDataQuery
>;
export const listCliQueryData = /* GraphQL */ `query ListCliQueryData(
  $filter: ModelCliQueryDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listCliQueryData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCliQueryDataQueryVariables,
  APITypes.ListCliQueryDataQuery
>;
export const syncCliQueryData = /* GraphQL */ `query SyncCliQueryData(
  $filter: ModelCliQueryDataFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCliQueryData(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCliQueryDataQueryVariables,
  APITypes.SyncCliQueryDataQuery
>;
export const getAppConfig = /* GraphQL */ `query GetAppConfig($id: ID!) {
  getAppConfig(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAppConfigQueryVariables,
  APITypes.GetAppConfigQuery
>;
export const listAppConfigs = /* GraphQL */ `query ListAppConfigs(
  $filter: ModelAppConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAppConfigsQueryVariables,
  APITypes.ListAppConfigsQuery
>;
export const syncAppConfigs = /* GraphQL */ `query SyncAppConfigs(
  $filter: ModelAppConfigFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAppConfigs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAppConfigsQueryVariables,
  APITypes.SyncAppConfigsQuery
>;
export const getRecordedPhrase = /* GraphQL */ `query GetRecordedPhrase($id: ID!) {
  getRecordedPhrase(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRecordedPhraseQueryVariables,
  APITypes.GetRecordedPhraseQuery
>;
export const listRecordedPhrases = /* GraphQL */ `query ListRecordedPhrases(
  $filter: ModelRecordedPhraseFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecordedPhrases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecordedPhrasesQueryVariables,
  APITypes.ListRecordedPhrasesQuery
>;
export const syncRecordedPhrases = /* GraphQL */ `query SyncRecordedPhrases(
  $filter: ModelRecordedPhraseFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRecordedPhrases(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRecordedPhrasesQueryVariables,
  APITypes.SyncRecordedPhrasesQuery
>;
export const getFeedbackData = /* GraphQL */ `query GetFeedbackData($id: ID!) {
  getFeedbackData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFeedbackDataQueryVariables,
  APITypes.GetFeedbackDataQuery
>;
export const listFeedbackData = /* GraphQL */ `query ListFeedbackData(
  $filter: ModelFeedbackDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbackData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbackDataQueryVariables,
  APITypes.ListFeedbackDataQuery
>;
export const syncFeedbackData = /* GraphQL */ `query SyncFeedbackData(
  $filter: ModelFeedbackDataFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFeedbackData(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFeedbackDataQueryVariables,
  APITypes.SyncFeedbackDataQuery
>;
export const getUserInfo = /* GraphQL */ `query GetUserInfo($id: ID!) {
  getUserInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserInfoQueryVariables,
  APITypes.GetUserInfoQuery
>;
export const listUserInfos = /* GraphQL */ `query ListUserInfos(
  $filter: ModelUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserInfosQueryVariables,
  APITypes.ListUserInfosQuery
>;
export const syncUserInfos = /* GraphQL */ `query SyncUserInfos(
  $filter: ModelUserInfoFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserInfos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserInfosQueryVariables,
  APITypes.SyncUserInfosQuery
>;
export const getKwakwalaPhraseDB = /* GraphQL */ `query GetKwakwalaPhraseDB($id: ID!) {
  getKwakwalaPhraseDB(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetKwakwalaPhraseDBQueryVariables,
  APITypes.GetKwakwalaPhraseDBQuery
>;
export const listKwakwalaPhraseDBS = /* GraphQL */ `query ListKwakwalaPhraseDBS(
  $filter: ModelKwakwalaPhraseDBFilterInput
  $limit: Int
  $nextToken: String
) {
  listKwakwalaPhraseDBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKwakwalaPhraseDBSQueryVariables,
  APITypes.ListKwakwalaPhraseDBSQuery
>;
export const syncKwakwalaPhraseDBS = /* GraphQL */ `query SyncKwakwalaPhraseDBS(
  $filter: ModelKwakwalaPhraseDBFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncKwakwalaPhraseDBS(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncKwakwalaPhraseDBSQueryVariables,
  APITypes.SyncKwakwalaPhraseDBSQuery
>;
