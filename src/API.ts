/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUploaderFileHistoryInput = {
  id?: string | null,
  email?: string | null,
  uuid?: string | null,
  fileName?: string | null,
  fileSize?: string | null,
  downloadUrl?: string | null,
  timeStamp?: string | null,
  _version?: number | null,
};

export type ModelUploaderFileHistoryConditionInput = {
  email?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  fileName?: ModelStringInput | null,
  fileSize?: ModelStringInput | null,
  downloadUrl?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  and?: Array< ModelUploaderFileHistoryConditionInput | null > | null,
  or?: Array< ModelUploaderFileHistoryConditionInput | null > | null,
  not?: ModelUploaderFileHistoryConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UploaderFileHistory = {
  __typename: "UploaderFileHistory",
  id: string,
  email?: string | null,
  uuid?: string | null,
  fileName?: string | null,
  fileSize?: string | null,
  downloadUrl?: string | null,
  timeStamp?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUploaderFileHistoryInput = {
  id: string,
  email?: string | null,
  uuid?: string | null,
  fileName?: string | null,
  fileSize?: string | null,
  downloadUrl?: string | null,
  timeStamp?: string | null,
  _version?: number | null,
};

export type DeleteUploaderFileHistoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateUploaderUserInfoInput = {
  id?: string | null,
  uuid?: string | null,
  name?: string | null,
  email?: string | null,
  isActive?: boolean | null,
  isAdmin?: boolean | null,
  _version?: number | null,
};

export type ModelUploaderUserInfoConditionInput = {
  uuid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUploaderUserInfoConditionInput | null > | null,
  or?: Array< ModelUploaderUserInfoConditionInput | null > | null,
  not?: ModelUploaderUserInfoConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UploaderUserInfo = {
  __typename: "UploaderUserInfo",
  id: string,
  uuid?: string | null,
  name?: string | null,
  email?: string | null,
  isActive?: boolean | null,
  isAdmin?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUploaderUserInfoInput = {
  id: string,
  uuid?: string | null,
  name?: string | null,
  email?: string | null,
  isActive?: boolean | null,
  isAdmin?: boolean | null,
  _version?: number | null,
};

export type DeleteUploaderUserInfoInput = {
  id: string,
  _version?: number | null,
};

export type CreateCliQueryDataInput = {
  id?: string | null,
  uuid?: string | null,
  title?: string | null,
  decscription?: string | null,
  gender?: string | null,
  transgender?: string | null,
  education?: string | null,
  languageId?: string | null,
  languageFluency?: string | null,
  miniCourse?: string | null,
  speechDisorders?: string | null,
  downloadUrl?: string | null,
  status?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type ModelCliQueryDataConditionInput = {
  uuid?: ModelStringInput | null,
  title?: ModelStringInput | null,
  decscription?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  transgender?: ModelStringInput | null,
  education?: ModelStringInput | null,
  languageId?: ModelStringInput | null,
  languageFluency?: ModelStringInput | null,
  miniCourse?: ModelStringInput | null,
  speechDisorders?: ModelStringInput | null,
  downloadUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelCliQueryDataConditionInput | null > | null,
  or?: Array< ModelCliQueryDataConditionInput | null > | null,
  not?: ModelCliQueryDataConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CliQueryData = {
  __typename: "CliQueryData",
  id: string,
  uuid?: string | null,
  title?: string | null,
  decscription?: string | null,
  gender?: string | null,
  transgender?: string | null,
  education?: string | null,
  languageId?: string | null,
  languageFluency?: string | null,
  miniCourse?: string | null,
  speechDisorders?: string | null,
  downloadUrl?: string | null,
  status?: string | null,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCliQueryDataInput = {
  id: string,
  uuid?: string | null,
  title?: string | null,
  decscription?: string | null,
  gender?: string | null,
  transgender?: string | null,
  education?: string | null,
  languageId?: string | null,
  languageFluency?: string | null,
  miniCourse?: string | null,
  speechDisorders?: string | null,
  downloadUrl?: string | null,
  status?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteCliQueryDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppConfigInput = {
  id?: string | null,
  maxSetsSize?: number | null,
  allowSkip?: boolean | null,
  _version?: number | null,
};

export type ModelAppConfigConditionInput = {
  maxSetsSize?: ModelIntInput | null,
  allowSkip?: ModelBooleanInput | null,
  and?: Array< ModelAppConfigConditionInput | null > | null,
  or?: Array< ModelAppConfigConditionInput | null > | null,
  not?: ModelAppConfigConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type AppConfig = {
  __typename: "AppConfig",
  id: string,
  maxSetsSize?: number | null,
  allowSkip?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAppConfigInput = {
  id: string,
  maxSetsSize?: number | null,
  allowSkip?: boolean | null,
  _version?: number | null,
};

export type DeleteAppConfigInput = {
  id: string,
  _version?: number | null,
};

export type CreateRecordedPhraseInput = {
  id?: string | null,
  phraseId?: string | null,
  phraseSetId?: string | null,
  identityId?: string | null,
  uuid?: string | null,
  postgresId?: string | null,
  filepath?: string | null,
  recordedTime?: string | null,
  languageId?: string | null,
  isValidated?: boolean | null,
  validationStatus?: string | null,
  validationComment?: string | null,
  validationRating?: number | null,
  validatedBy?: string | null,
  validatedAt?: string | null,
  _version?: number | null,
};

export type ModelRecordedPhraseConditionInput = {
  phraseId?: ModelStringInput | null,
  phraseSetId?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  postgresId?: ModelStringInput | null,
  filepath?: ModelStringInput | null,
  recordedTime?: ModelStringInput | null,
  languageId?: ModelStringInput | null,
  isValidated?: ModelBooleanInput | null,
  validationStatus?: ModelStringInput | null,
  validationComment?: ModelStringInput | null,
  validationRating?: ModelIntInput | null,
  validatedBy?: ModelIDInput | null,
  validatedAt?: ModelStringInput | null,
  and?: Array< ModelRecordedPhraseConditionInput | null > | null,
  or?: Array< ModelRecordedPhraseConditionInput | null > | null,
  not?: ModelRecordedPhraseConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type RecordedPhrase = {
  __typename: "RecordedPhrase",
  id: string,
  phraseId?: string | null,
  phraseSetId?: string | null,
  identityId?: string | null,
  uuid?: string | null,
  postgresId?: string | null,
  filepath?: string | null,
  recordedTime?: string | null,
  languageId?: string | null,
  isValidated?: boolean | null,
  validationStatus?: string | null,
  validationComment?: string | null,
  validationRating?: number | null,
  validatedBy?: string | null,
  validatedAt?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateRecordedPhraseInput = {
  id: string,
  phraseId?: string | null,
  phraseSetId?: string | null,
  identityId?: string | null,
  uuid?: string | null,
  postgresId?: string | null,
  filepath?: string | null,
  recordedTime?: string | null,
  languageId?: string | null,
  isValidated?: boolean | null,
  validationStatus?: string | null,
  validationComment?: string | null,
  validationRating?: number | null,
  validatedBy?: string | null,
  validatedAt?: string | null,
  _version?: number | null,
};

export type DeleteRecordedPhraseInput = {
  id: string,
  _version?: number | null,
};

export type CreateFeedbackDataInput = {
  id?: string | null,
  uid?: string | null,
  identityId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  message?: string | null,
  date?: string | null,
  isCompleted?: boolean | null,
  _version?: number | null,
};

export type ModelFeedbackDataConditionInput = {
  uid?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  date?: ModelStringInput | null,
  isCompleted?: ModelBooleanInput | null,
  and?: Array< ModelFeedbackDataConditionInput | null > | null,
  or?: Array< ModelFeedbackDataConditionInput | null > | null,
  not?: ModelFeedbackDataConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type FeedbackData = {
  __typename: "FeedbackData",
  id: string,
  uid?: string | null,
  identityId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  message?: string | null,
  date?: string | null,
  isCompleted?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateFeedbackDataInput = {
  id: string,
  uid?: string | null,
  identityId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  message?: string | null,
  date?: string | null,
  isCompleted?: boolean | null,
  _version?: number | null,
};

export type DeleteFeedbackDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInfoInput = {
  id?: string | null,
  languageId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phraseSubsetIndex?: string | null,
  project?: string | null,
  dob?: string | null,
  gender?: string | null,
  geographicLocation?: string | null,
  firstLanguage?: string | null,
  fluency?: string | null,
  education?: string | null,
  priorMinCourseTraining?: string | null,
  speechDisorders?: string | null,
  isTransgender?: string | null,
  uid?: string | null,
  isAdmin?: boolean | null,
  isActive?: boolean | null,
  identityId?: string | null,
  enabledDailyReminder?: boolean | null,
  reminderTime?: string | null,
  postgresId?: number | null,
  _version?: number | null,
};

export type ModelUserInfoConditionInput = {
  languageId?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phraseSubsetIndex?: ModelStringInput | null,
  project?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  geographicLocation?: ModelStringInput | null,
  firstLanguage?: ModelStringInput | null,
  fluency?: ModelStringInput | null,
  education?: ModelStringInput | null,
  priorMinCourseTraining?: ModelStringInput | null,
  speechDisorders?: ModelStringInput | null,
  isTransgender?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  identityId?: ModelStringInput | null,
  enabledDailyReminder?: ModelBooleanInput | null,
  reminderTime?: ModelStringInput | null,
  postgresId?: ModelIntInput | null,
  and?: Array< ModelUserInfoConditionInput | null > | null,
  or?: Array< ModelUserInfoConditionInput | null > | null,
  not?: ModelUserInfoConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UserInfo = {
  __typename: "UserInfo",
  id: string,
  languageId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phraseSubsetIndex?: string | null,
  project?: string | null,
  dob?: string | null,
  gender?: string | null,
  geographicLocation?: string | null,
  firstLanguage?: string | null,
  fluency?: string | null,
  education?: string | null,
  priorMinCourseTraining?: string | null,
  speechDisorders?: string | null,
  isTransgender?: string | null,
  uid?: string | null,
  isAdmin?: boolean | null,
  isActive?: boolean | null,
  identityId?: string | null,
  enabledDailyReminder?: boolean | null,
  reminderTime?: string | null,
  postgresId?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateUserInfoInput = {
  id: string,
  languageId?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phraseSubsetIndex?: string | null,
  project?: string | null,
  dob?: string | null,
  gender?: string | null,
  geographicLocation?: string | null,
  firstLanguage?: string | null,
  fluency?: string | null,
  education?: string | null,
  priorMinCourseTraining?: string | null,
  speechDisorders?: string | null,
  isTransgender?: string | null,
  uid?: string | null,
  isAdmin?: boolean | null,
  isActive?: boolean | null,
  identityId?: string | null,
  enabledDailyReminder?: boolean | null,
  reminderTime?: string | null,
  postgresId?: number | null,
  _version?: number | null,
};

export type DeleteUserInfoInput = {
  id: string,
  _version?: number | null,
};

export type CreateKwakwalaPhraseDBInput = {
  id?: string | null,
  phraseId?: number | null,
  phraseSetId?: number | null,
  description?: string | null,
  original?: string | null,
  translated?: string | null,
  enabled?: boolean | null,
  languageId?: number | null,
  exampleAudioPath?: string | null,
  recording1Start?: number | null,
  recording1Stop?: number | null,
  recording2Start?: number | null,
  recording2Stop?: number | null,
  _version?: number | null,
};

export type ModelKwakwalaPhraseDBConditionInput = {
  phraseId?: ModelIntInput | null,
  phraseSetId?: ModelIntInput | null,
  description?: ModelStringInput | null,
  original?: ModelStringInput | null,
  translated?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  languageId?: ModelIntInput | null,
  exampleAudioPath?: ModelStringInput | null,
  recording1Start?: ModelFloatInput | null,
  recording1Stop?: ModelFloatInput | null,
  recording2Start?: ModelFloatInput | null,
  recording2Stop?: ModelFloatInput | null,
  and?: Array< ModelKwakwalaPhraseDBConditionInput | null > | null,
  or?: Array< ModelKwakwalaPhraseDBConditionInput | null > | null,
  not?: ModelKwakwalaPhraseDBConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type KwakwalaPhraseDB = {
  __typename: "KwakwalaPhraseDB",
  id: string,
  phraseId?: number | null,
  phraseSetId?: number | null,
  description?: string | null,
  original?: string | null,
  translated?: string | null,
  enabled?: boolean | null,
  languageId?: number | null,
  exampleAudioPath?: string | null,
  recording1Start?: number | null,
  recording1Stop?: number | null,
  recording2Start?: number | null,
  recording2Stop?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateKwakwalaPhraseDBInput = {
  id: string,
  phraseId?: number | null,
  phraseSetId?: number | null,
  description?: string | null,
  original?: string | null,
  translated?: string | null,
  enabled?: boolean | null,
  languageId?: number | null,
  exampleAudioPath?: string | null,
  recording1Start?: number | null,
  recording1Stop?: number | null,
  recording2Start?: number | null,
  recording2Stop?: number | null,
  _version?: number | null,
};

export type DeleteKwakwalaPhraseDBInput = {
  id: string,
  _version?: number | null,
};

export type ModelUploaderFileHistoryFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  fileName?: ModelStringInput | null,
  fileSize?: ModelStringInput | null,
  downloadUrl?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUploaderFileHistoryFilterInput | null > | null,
  or?: Array< ModelUploaderFileHistoryFilterInput | null > | null,
  not?: ModelUploaderFileHistoryFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUploaderFileHistoryConnection = {
  __typename: "ModelUploaderFileHistoryConnection",
  items:  Array<UploaderFileHistory | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUploaderUserInfoFilterInput = {
  id?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  isAdmin?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUploaderUserInfoFilterInput | null > | null,
  or?: Array< ModelUploaderUserInfoFilterInput | null > | null,
  not?: ModelUploaderUserInfoFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUploaderUserInfoConnection = {
  __typename: "ModelUploaderUserInfoConnection",
  items:  Array<UploaderUserInfo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCliQueryDataFilterInput = {
  id?: ModelIDInput | null,
  uuid?: ModelStringInput | null,
  title?: ModelStringInput | null,
  decscription?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  transgender?: ModelStringInput | null,
  education?: ModelStringInput | null,
  languageId?: ModelStringInput | null,
  languageFluency?: ModelStringInput | null,
  miniCourse?: ModelStringInput | null,
  speechDisorders?: ModelStringInput | null,
  downloadUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCliQueryDataFilterInput | null > | null,
  or?: Array< ModelCliQueryDataFilterInput | null > | null,
  not?: ModelCliQueryDataFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCliQueryDataConnection = {
  __typename: "ModelCliQueryDataConnection",
  items:  Array<CliQueryData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppConfigFilterInput = {
  id?: ModelIDInput | null,
  maxSetsSize?: ModelIntInput | null,
  allowSkip?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAppConfigFilterInput | null > | null,
  or?: Array< ModelAppConfigFilterInput | null > | null,
  not?: ModelAppConfigFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAppConfigConnection = {
  __typename: "ModelAppConfigConnection",
  items:  Array<AppConfig | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRecordedPhraseFilterInput = {
  id?: ModelIDInput | null,
  phraseId?: ModelStringInput | null,
  phraseSetId?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  postgresId?: ModelStringInput | null,
  filepath?: ModelStringInput | null,
  recordedTime?: ModelStringInput | null,
  languageId?: ModelStringInput | null,
  isValidated?: ModelBooleanInput | null,
  validationStatus?: ModelStringInput | null,
  validationComment?: ModelStringInput | null,
  validationRating?: ModelIntInput | null,
  validatedBy?: ModelIDInput | null,
  validatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRecordedPhraseFilterInput | null > | null,
  or?: Array< ModelRecordedPhraseFilterInput | null > | null,
  not?: ModelRecordedPhraseFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelRecordedPhraseConnection = {
  __typename: "ModelRecordedPhraseConnection",
  items:  Array<RecordedPhrase | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFeedbackDataFilterInput = {
  id?: ModelIDInput | null,
  uid?: ModelStringInput | null,
  identityId?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  message?: ModelStringInput | null,
  date?: ModelStringInput | null,
  isCompleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeedbackDataFilterInput | null > | null,
  or?: Array< ModelFeedbackDataFilterInput | null > | null,
  not?: ModelFeedbackDataFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFeedbackDataConnection = {
  __typename: "ModelFeedbackDataConnection",
  items:  Array<FeedbackData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserInfoFilterInput = {
  id?: ModelIDInput | null,
  languageId?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phraseSubsetIndex?: ModelStringInput | null,
  project?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  geographicLocation?: ModelStringInput | null,
  firstLanguage?: ModelStringInput | null,
  fluency?: ModelStringInput | null,
  education?: ModelStringInput | null,
  priorMinCourseTraining?: ModelStringInput | null,
  speechDisorders?: ModelStringInput | null,
  isTransgender?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  identityId?: ModelStringInput | null,
  enabledDailyReminder?: ModelBooleanInput | null,
  reminderTime?: ModelStringInput | null,
  postgresId?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoFilterInput | null > | null,
  or?: Array< ModelUserInfoFilterInput | null > | null,
  not?: ModelUserInfoFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection",
  items:  Array<UserInfo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelKwakwalaPhraseDBFilterInput = {
  id?: ModelIDInput | null,
  phraseId?: ModelIntInput | null,
  phraseSetId?: ModelIntInput | null,
  description?: ModelStringInput | null,
  original?: ModelStringInput | null,
  translated?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  languageId?: ModelIntInput | null,
  exampleAudioPath?: ModelStringInput | null,
  recording1Start?: ModelFloatInput | null,
  recording1Stop?: ModelFloatInput | null,
  recording2Start?: ModelFloatInput | null,
  recording2Stop?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelKwakwalaPhraseDBFilterInput | null > | null,
  or?: Array< ModelKwakwalaPhraseDBFilterInput | null > | null,
  not?: ModelKwakwalaPhraseDBFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelKwakwalaPhraseDBConnection = {
  __typename: "ModelKwakwalaPhraseDBConnection",
  items:  Array<KwakwalaPhraseDB | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUploaderFileHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
  fileName?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionStringInput | null,
  downloadUrl?: ModelSubscriptionStringInput | null,
  timeStamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUploaderFileHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionUploaderFileHistoryFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUploaderUserInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUploaderUserInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUploaderUserInfoFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCliQueryDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  uuid?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  decscription?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  transgender?: ModelSubscriptionStringInput | null,
  education?: ModelSubscriptionStringInput | null,
  languageId?: ModelSubscriptionStringInput | null,
  languageFluency?: ModelSubscriptionStringInput | null,
  miniCourse?: ModelSubscriptionStringInput | null,
  speechDisorders?: ModelSubscriptionStringInput | null,
  downloadUrl?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCliQueryDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionCliQueryDataFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAppConfigFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  maxSetsSize?: ModelSubscriptionIntInput | null,
  allowSkip?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppConfigFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppConfigFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionRecordedPhraseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phraseId?: ModelSubscriptionStringInput | null,
  phraseSetId?: ModelSubscriptionStringInput | null,
  identityId?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
  postgresId?: ModelSubscriptionStringInput | null,
  filepath?: ModelSubscriptionStringInput | null,
  recordedTime?: ModelSubscriptionStringInput | null,
  languageId?: ModelSubscriptionStringInput | null,
  isValidated?: ModelSubscriptionBooleanInput | null,
  validationStatus?: ModelSubscriptionStringInput | null,
  validationComment?: ModelSubscriptionStringInput | null,
  validationRating?: ModelSubscriptionIntInput | null,
  validatedBy?: ModelSubscriptionIDInput | null,
  validatedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRecordedPhraseFilterInput | null > | null,
  or?: Array< ModelSubscriptionRecordedPhraseFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFeedbackDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  uid?: ModelSubscriptionStringInput | null,
  identityId?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeedbackDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeedbackDataFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  languageId?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phraseSubsetIndex?: ModelSubscriptionStringInput | null,
  project?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  geographicLocation?: ModelSubscriptionStringInput | null,
  firstLanguage?: ModelSubscriptionStringInput | null,
  fluency?: ModelSubscriptionStringInput | null,
  education?: ModelSubscriptionStringInput | null,
  priorMinCourseTraining?: ModelSubscriptionStringInput | null,
  speechDisorders?: ModelSubscriptionStringInput | null,
  isTransgender?: ModelSubscriptionStringInput | null,
  uid?: ModelSubscriptionStringInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  identityId?: ModelSubscriptionStringInput | null,
  enabledDailyReminder?: ModelSubscriptionBooleanInput | null,
  reminderTime?: ModelSubscriptionStringInput | null,
  postgresId?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionKwakwalaPhraseDBFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phraseId?: ModelSubscriptionIntInput | null,
  phraseSetId?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  original?: ModelSubscriptionStringInput | null,
  translated?: ModelSubscriptionStringInput | null,
  enabled?: ModelSubscriptionBooleanInput | null,
  languageId?: ModelSubscriptionIntInput | null,
  exampleAudioPath?: ModelSubscriptionStringInput | null,
  recording1Start?: ModelSubscriptionFloatInput | null,
  recording1Stop?: ModelSubscriptionFloatInput | null,
  recording2Start?: ModelSubscriptionFloatInput | null,
  recording2Stop?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionKwakwalaPhraseDBFilterInput | null > | null,
  or?: Array< ModelSubscriptionKwakwalaPhraseDBFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUploaderFileHistoryMutationVariables = {
  input: CreateUploaderFileHistoryInput,
  condition?: ModelUploaderFileHistoryConditionInput | null,
};

export type CreateUploaderFileHistoryMutation = {
  createUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUploaderFileHistoryMutationVariables = {
  input: UpdateUploaderFileHistoryInput,
  condition?: ModelUploaderFileHistoryConditionInput | null,
};

export type UpdateUploaderFileHistoryMutation = {
  updateUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUploaderFileHistoryMutationVariables = {
  input: DeleteUploaderFileHistoryInput,
  condition?: ModelUploaderFileHistoryConditionInput | null,
};

export type DeleteUploaderFileHistoryMutation = {
  deleteUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUploaderUserInfoMutationVariables = {
  input: CreateUploaderUserInfoInput,
  condition?: ModelUploaderUserInfoConditionInput | null,
};

export type CreateUploaderUserInfoMutation = {
  createUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUploaderUserInfoMutationVariables = {
  input: UpdateUploaderUserInfoInput,
  condition?: ModelUploaderUserInfoConditionInput | null,
};

export type UpdateUploaderUserInfoMutation = {
  updateUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUploaderUserInfoMutationVariables = {
  input: DeleteUploaderUserInfoInput,
  condition?: ModelUploaderUserInfoConditionInput | null,
};

export type DeleteUploaderUserInfoMutation = {
  deleteUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCliQueryDataMutationVariables = {
  input: CreateCliQueryDataInput,
  condition?: ModelCliQueryDataConditionInput | null,
};

export type CreateCliQueryDataMutation = {
  createCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCliQueryDataMutationVariables = {
  input: UpdateCliQueryDataInput,
  condition?: ModelCliQueryDataConditionInput | null,
};

export type UpdateCliQueryDataMutation = {
  updateCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCliQueryDataMutationVariables = {
  input: DeleteCliQueryDataInput,
  condition?: ModelCliQueryDataConditionInput | null,
};

export type DeleteCliQueryDataMutation = {
  deleteCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppConfigMutationVariables = {
  input: CreateAppConfigInput,
  condition?: ModelAppConfigConditionInput | null,
};

export type CreateAppConfigMutation = {
  createAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAppConfigMutationVariables = {
  input: UpdateAppConfigInput,
  condition?: ModelAppConfigConditionInput | null,
};

export type UpdateAppConfigMutation = {
  updateAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAppConfigMutationVariables = {
  input: DeleteAppConfigInput,
  condition?: ModelAppConfigConditionInput | null,
};

export type DeleteAppConfigMutation = {
  deleteAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRecordedPhraseMutationVariables = {
  input: CreateRecordedPhraseInput,
  condition?: ModelRecordedPhraseConditionInput | null,
};

export type CreateRecordedPhraseMutation = {
  createRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateRecordedPhraseMutationVariables = {
  input: UpdateRecordedPhraseInput,
  condition?: ModelRecordedPhraseConditionInput | null,
};

export type UpdateRecordedPhraseMutation = {
  updateRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteRecordedPhraseMutationVariables = {
  input: DeleteRecordedPhraseInput,
  condition?: ModelRecordedPhraseConditionInput | null,
};

export type DeleteRecordedPhraseMutation = {
  deleteRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateFeedbackDataMutationVariables = {
  input: CreateFeedbackDataInput,
  condition?: ModelFeedbackDataConditionInput | null,
};

export type CreateFeedbackDataMutation = {
  createFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateFeedbackDataMutationVariables = {
  input: UpdateFeedbackDataInput,
  condition?: ModelFeedbackDataConditionInput | null,
};

export type UpdateFeedbackDataMutation = {
  updateFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteFeedbackDataMutationVariables = {
  input: DeleteFeedbackDataInput,
  condition?: ModelFeedbackDataConditionInput | null,
};

export type DeleteFeedbackDataMutation = {
  deleteFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateUserInfoMutationVariables = {
  input: CreateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserInfoMutationVariables = {
  input: UpdateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserInfoMutationVariables = {
  input: DeleteUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateKwakwalaPhraseDBMutationVariables = {
  input: CreateKwakwalaPhraseDBInput,
  condition?: ModelKwakwalaPhraseDBConditionInput | null,
};

export type CreateKwakwalaPhraseDBMutation = {
  createKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateKwakwalaPhraseDBMutationVariables = {
  input: UpdateKwakwalaPhraseDBInput,
  condition?: ModelKwakwalaPhraseDBConditionInput | null,
};

export type UpdateKwakwalaPhraseDBMutation = {
  updateKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteKwakwalaPhraseDBMutationVariables = {
  input: DeleteKwakwalaPhraseDBInput,
  condition?: ModelKwakwalaPhraseDBConditionInput | null,
};

export type DeleteKwakwalaPhraseDBMutation = {
  deleteKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetUploaderFileHistoryQueryVariables = {
  id: string,
};

export type GetUploaderFileHistoryQuery = {
  getUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUploaderFileHistoriesQueryVariables = {
  filter?: ModelUploaderFileHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUploaderFileHistoriesQuery = {
  listUploaderFileHistories?:  {
    __typename: "ModelUploaderFileHistoryConnection",
    items:  Array< {
      __typename: "UploaderFileHistory",
      id: string,
      email?: string | null,
      uuid?: string | null,
      fileName?: string | null,
      fileSize?: string | null,
      downloadUrl?: string | null,
      timeStamp?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUploaderFileHistoriesQueryVariables = {
  filter?: ModelUploaderFileHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUploaderFileHistoriesQuery = {
  syncUploaderFileHistories?:  {
    __typename: "ModelUploaderFileHistoryConnection",
    items:  Array< {
      __typename: "UploaderFileHistory",
      id: string,
      email?: string | null,
      uuid?: string | null,
      fileName?: string | null,
      fileSize?: string | null,
      downloadUrl?: string | null,
      timeStamp?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUploaderUserInfoQueryVariables = {
  id: string,
};

export type GetUploaderUserInfoQuery = {
  getUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUploaderUserInfosQueryVariables = {
  filter?: ModelUploaderUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUploaderUserInfosQuery = {
  listUploaderUserInfos?:  {
    __typename: "ModelUploaderUserInfoConnection",
    items:  Array< {
      __typename: "UploaderUserInfo",
      id: string,
      uuid?: string | null,
      name?: string | null,
      email?: string | null,
      isActive?: boolean | null,
      isAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUploaderUserInfosQueryVariables = {
  filter?: ModelUploaderUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUploaderUserInfosQuery = {
  syncUploaderUserInfos?:  {
    __typename: "ModelUploaderUserInfoConnection",
    items:  Array< {
      __typename: "UploaderUserInfo",
      id: string,
      uuid?: string | null,
      name?: string | null,
      email?: string | null,
      isActive?: boolean | null,
      isAdmin?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCliQueryDataQueryVariables = {
  id: string,
};

export type GetCliQueryDataQuery = {
  getCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCliQueryDataQueryVariables = {
  filter?: ModelCliQueryDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCliQueryDataQuery = {
  listCliQueryData?:  {
    __typename: "ModelCliQueryDataConnection",
    items:  Array< {
      __typename: "CliQueryData",
      id: string,
      uuid?: string | null,
      title?: string | null,
      decscription?: string | null,
      gender?: string | null,
      transgender?: string | null,
      education?: string | null,
      languageId?: string | null,
      languageFluency?: string | null,
      miniCourse?: string | null,
      speechDisorders?: string | null,
      downloadUrl?: string | null,
      status?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCliQueryDataQueryVariables = {
  filter?: ModelCliQueryDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCliQueryDataQuery = {
  syncCliQueryData?:  {
    __typename: "ModelCliQueryDataConnection",
    items:  Array< {
      __typename: "CliQueryData",
      id: string,
      uuid?: string | null,
      title?: string | null,
      decscription?: string | null,
      gender?: string | null,
      transgender?: string | null,
      education?: string | null,
      languageId?: string | null,
      languageFluency?: string | null,
      miniCourse?: string | null,
      speechDisorders?: string | null,
      downloadUrl?: string | null,
      status?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppConfigQueryVariables = {
  id: string,
};

export type GetAppConfigQuery = {
  getAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAppConfigsQueryVariables = {
  filter?: ModelAppConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppConfigsQuery = {
  listAppConfigs?:  {
    __typename: "ModelAppConfigConnection",
    items:  Array< {
      __typename: "AppConfig",
      id: string,
      maxSetsSize?: number | null,
      allowSkip?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppConfigsQueryVariables = {
  filter?: ModelAppConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppConfigsQuery = {
  syncAppConfigs?:  {
    __typename: "ModelAppConfigConnection",
    items:  Array< {
      __typename: "AppConfig",
      id: string,
      maxSetsSize?: number | null,
      allowSkip?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRecordedPhraseQueryVariables = {
  id: string,
};

export type GetRecordedPhraseQuery = {
  getRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListRecordedPhrasesQueryVariables = {
  filter?: ModelRecordedPhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecordedPhrasesQuery = {
  listRecordedPhrases?:  {
    __typename: "ModelRecordedPhraseConnection",
    items:  Array< {
      __typename: "RecordedPhrase",
      id: string,
      phraseId?: string | null,
      phraseSetId?: string | null,
      identityId?: string | null,
      uuid?: string | null,
      postgresId?: string | null,
      filepath?: string | null,
      recordedTime?: string | null,
      languageId?: string | null,
      isValidated?: boolean | null,
      validationStatus?: string | null,
      validationComment?: string | null,
      validationRating?: number | null,
      validatedBy?: string | null,
      validatedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRecordedPhrasesQueryVariables = {
  filter?: ModelRecordedPhraseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRecordedPhrasesQuery = {
  syncRecordedPhrases?:  {
    __typename: "ModelRecordedPhraseConnection",
    items:  Array< {
      __typename: "RecordedPhrase",
      id: string,
      phraseId?: string | null,
      phraseSetId?: string | null,
      identityId?: string | null,
      uuid?: string | null,
      postgresId?: string | null,
      filepath?: string | null,
      recordedTime?: string | null,
      languageId?: string | null,
      isValidated?: boolean | null,
      validationStatus?: string | null,
      validationComment?: string | null,
      validationRating?: number | null,
      validatedBy?: string | null,
      validatedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFeedbackDataQueryVariables = {
  id: string,
};

export type GetFeedbackDataQuery = {
  getFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListFeedbackDataQueryVariables = {
  filter?: ModelFeedbackDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbackDataQuery = {
  listFeedbackData?:  {
    __typename: "ModelFeedbackDataConnection",
    items:  Array< {
      __typename: "FeedbackData",
      id: string,
      uid?: string | null,
      identityId?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      message?: string | null,
      date?: string | null,
      isCompleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFeedbackDataQueryVariables = {
  filter?: ModelFeedbackDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFeedbackDataQuery = {
  syncFeedbackData?:  {
    __typename: "ModelFeedbackDataConnection",
    items:  Array< {
      __typename: "FeedbackData",
      id: string,
      uid?: string | null,
      identityId?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      message?: string | null,
      date?: string | null,
      isCompleted?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInfosQuery = {
  listUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "UserInfo",
      id: string,
      languageId?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phraseSubsetIndex?: string | null,
      project?: string | null,
      dob?: string | null,
      gender?: string | null,
      geographicLocation?: string | null,
      firstLanguage?: string | null,
      fluency?: string | null,
      education?: string | null,
      priorMinCourseTraining?: string | null,
      speechDisorders?: string | null,
      isTransgender?: string | null,
      uid?: string | null,
      isAdmin?: boolean | null,
      isActive?: boolean | null,
      identityId?: string | null,
      enabledDailyReminder?: boolean | null,
      reminderTime?: string | null,
      postgresId?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserInfosQuery = {
  syncUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "UserInfo",
      id: string,
      languageId?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      phraseSubsetIndex?: string | null,
      project?: string | null,
      dob?: string | null,
      gender?: string | null,
      geographicLocation?: string | null,
      firstLanguage?: string | null,
      fluency?: string | null,
      education?: string | null,
      priorMinCourseTraining?: string | null,
      speechDisorders?: string | null,
      isTransgender?: string | null,
      uid?: string | null,
      isAdmin?: boolean | null,
      isActive?: boolean | null,
      identityId?: string | null,
      enabledDailyReminder?: boolean | null,
      reminderTime?: string | null,
      postgresId?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetKwakwalaPhraseDBQueryVariables = {
  id: string,
};

export type GetKwakwalaPhraseDBQuery = {
  getKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListKwakwalaPhraseDBSQueryVariables = {
  filter?: ModelKwakwalaPhraseDBFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKwakwalaPhraseDBSQuery = {
  listKwakwalaPhraseDBS?:  {
    __typename: "ModelKwakwalaPhraseDBConnection",
    items:  Array< {
      __typename: "KwakwalaPhraseDB",
      id: string,
      phraseId?: number | null,
      phraseSetId?: number | null,
      description?: string | null,
      original?: string | null,
      translated?: string | null,
      enabled?: boolean | null,
      languageId?: number | null,
      exampleAudioPath?: string | null,
      recording1Start?: number | null,
      recording1Stop?: number | null,
      recording2Start?: number | null,
      recording2Stop?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncKwakwalaPhraseDBSQueryVariables = {
  filter?: ModelKwakwalaPhraseDBFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncKwakwalaPhraseDBSQuery = {
  syncKwakwalaPhraseDBS?:  {
    __typename: "ModelKwakwalaPhraseDBConnection",
    items:  Array< {
      __typename: "KwakwalaPhraseDB",
      id: string,
      phraseId?: number | null,
      phraseSetId?: number | null,
      description?: string | null,
      original?: string | null,
      translated?: string | null,
      enabled?: boolean | null,
      languageId?: number | null,
      exampleAudioPath?: string | null,
      recording1Start?: number | null,
      recording1Stop?: number | null,
      recording2Start?: number | null,
      recording2Stop?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUploaderFileHistorySubscriptionVariables = {
  filter?: ModelSubscriptionUploaderFileHistoryFilterInput | null,
};

export type OnCreateUploaderFileHistorySubscription = {
  onCreateUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUploaderFileHistorySubscriptionVariables = {
  filter?: ModelSubscriptionUploaderFileHistoryFilterInput | null,
};

export type OnUpdateUploaderFileHistorySubscription = {
  onUpdateUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUploaderFileHistorySubscriptionVariables = {
  filter?: ModelSubscriptionUploaderFileHistoryFilterInput | null,
};

export type OnDeleteUploaderFileHistorySubscription = {
  onDeleteUploaderFileHistory?:  {
    __typename: "UploaderFileHistory",
    id: string,
    email?: string | null,
    uuid?: string | null,
    fileName?: string | null,
    fileSize?: string | null,
    downloadUrl?: string | null,
    timeStamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUploaderUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUploaderUserInfoFilterInput | null,
};

export type OnCreateUploaderUserInfoSubscription = {
  onCreateUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUploaderUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUploaderUserInfoFilterInput | null,
};

export type OnUpdateUploaderUserInfoSubscription = {
  onUpdateUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUploaderUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUploaderUserInfoFilterInput | null,
};

export type OnDeleteUploaderUserInfoSubscription = {
  onDeleteUploaderUserInfo?:  {
    __typename: "UploaderUserInfo",
    id: string,
    uuid?: string | null,
    name?: string | null,
    email?: string | null,
    isActive?: boolean | null,
    isAdmin?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCliQueryDataSubscriptionVariables = {
  filter?: ModelSubscriptionCliQueryDataFilterInput | null,
};

export type OnCreateCliQueryDataSubscription = {
  onCreateCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCliQueryDataSubscriptionVariables = {
  filter?: ModelSubscriptionCliQueryDataFilterInput | null,
};

export type OnUpdateCliQueryDataSubscription = {
  onUpdateCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCliQueryDataSubscriptionVariables = {
  filter?: ModelSubscriptionCliQueryDataFilterInput | null,
};

export type OnDeleteCliQueryDataSubscription = {
  onDeleteCliQueryData?:  {
    __typename: "CliQueryData",
    id: string,
    uuid?: string | null,
    title?: string | null,
    decscription?: string | null,
    gender?: string | null,
    transgender?: string | null,
    education?: string | null,
    languageId?: string | null,
    languageFluency?: string | null,
    miniCourse?: string | null,
    speechDisorders?: string | null,
    downloadUrl?: string | null,
    status?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppConfigSubscriptionVariables = {
  filter?: ModelSubscriptionAppConfigFilterInput | null,
};

export type OnCreateAppConfigSubscription = {
  onCreateAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAppConfigSubscriptionVariables = {
  filter?: ModelSubscriptionAppConfigFilterInput | null,
};

export type OnUpdateAppConfigSubscription = {
  onUpdateAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAppConfigSubscriptionVariables = {
  filter?: ModelSubscriptionAppConfigFilterInput | null,
};

export type OnDeleteAppConfigSubscription = {
  onDeleteAppConfig?:  {
    __typename: "AppConfig",
    id: string,
    maxSetsSize?: number | null,
    allowSkip?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRecordedPhraseSubscriptionVariables = {
  filter?: ModelSubscriptionRecordedPhraseFilterInput | null,
  owner?: string | null,
};

export type OnCreateRecordedPhraseSubscription = {
  onCreateRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateRecordedPhraseSubscriptionVariables = {
  filter?: ModelSubscriptionRecordedPhraseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRecordedPhraseSubscription = {
  onUpdateRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteRecordedPhraseSubscriptionVariables = {
  filter?: ModelSubscriptionRecordedPhraseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRecordedPhraseSubscription = {
  onDeleteRecordedPhrase?:  {
    __typename: "RecordedPhrase",
    id: string,
    phraseId?: string | null,
    phraseSetId?: string | null,
    identityId?: string | null,
    uuid?: string | null,
    postgresId?: string | null,
    filepath?: string | null,
    recordedTime?: string | null,
    languageId?: string | null,
    isValidated?: boolean | null,
    validationStatus?: string | null,
    validationComment?: string | null,
    validationRating?: number | null,
    validatedBy?: string | null,
    validatedAt?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateFeedbackDataSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateFeedbackDataSubscription = {
  onCreateFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateFeedbackDataSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFeedbackDataSubscription = {
  onUpdateFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteFeedbackDataSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFeedbackDataSubscription = {
  onDeleteFeedbackData?:  {
    __typename: "FeedbackData",
    id: string,
    uid?: string | null,
    identityId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    message?: string | null,
    date?: string | null,
    isCompleted?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    languageId?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    phraseSubsetIndex?: string | null,
    project?: string | null,
    dob?: string | null,
    gender?: string | null,
    geographicLocation?: string | null,
    firstLanguage?: string | null,
    fluency?: string | null,
    education?: string | null,
    priorMinCourseTraining?: string | null,
    speechDisorders?: string | null,
    isTransgender?: string | null,
    uid?: string | null,
    isAdmin?: boolean | null,
    isActive?: boolean | null,
    identityId?: string | null,
    enabledDailyReminder?: boolean | null,
    reminderTime?: string | null,
    postgresId?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateKwakwalaPhraseDBSubscriptionVariables = {
  filter?: ModelSubscriptionKwakwalaPhraseDBFilterInput | null,
  owner?: string | null,
};

export type OnCreateKwakwalaPhraseDBSubscription = {
  onCreateKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateKwakwalaPhraseDBSubscriptionVariables = {
  filter?: ModelSubscriptionKwakwalaPhraseDBFilterInput | null,
  owner?: string | null,
};

export type OnUpdateKwakwalaPhraseDBSubscription = {
  onUpdateKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteKwakwalaPhraseDBSubscriptionVariables = {
  filter?: ModelSubscriptionKwakwalaPhraseDBFilterInput | null,
  owner?: string | null,
};

export type OnDeleteKwakwalaPhraseDBSubscription = {
  onDeleteKwakwalaPhraseDB?:  {
    __typename: "KwakwalaPhraseDB",
    id: string,
    phraseId?: number | null,
    phraseSetId?: number | null,
    description?: string | null,
    original?: string | null,
    translated?: string | null,
    enabled?: boolean | null,
    languageId?: number | null,
    exampleAudioPath?: string | null,
    recording1Start?: number | null,
    recording1Stop?: number | null,
    recording2Start?: number | null,
    recording2Stop?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
