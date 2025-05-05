import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUploaderFileHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UploaderFileHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly uuid?: string | null;
  readonly fileName?: string | null;
  readonly fileSize?: string | null;
  readonly downloadUrl?: string | null;
  readonly timeStamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUploaderFileHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UploaderFileHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly uuid?: string | null;
  readonly fileName?: string | null;
  readonly fileSize?: string | null;
  readonly downloadUrl?: string | null;
  readonly timeStamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UploaderFileHistory = LazyLoading extends LazyLoadingDisabled ? EagerUploaderFileHistory : LazyUploaderFileHistory

export declare const UploaderFileHistory: (new (init: ModelInit<UploaderFileHistory>) => UploaderFileHistory) & {
  copyOf(source: UploaderFileHistory, mutator: (draft: MutableModel<UploaderFileHistory>) => MutableModel<UploaderFileHistory> | void): UploaderFileHistory;
}

type EagerUploaderUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UploaderUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uuid?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly isActive?: boolean | null;
  readonly isAdmin?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUploaderUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UploaderUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uuid?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly isActive?: boolean | null;
  readonly isAdmin?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UploaderUserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUploaderUserInfo : LazyUploaderUserInfo

export declare const UploaderUserInfo: (new (init: ModelInit<UploaderUserInfo>) => UploaderUserInfo) & {
  copyOf(source: UploaderUserInfo, mutator: (draft: MutableModel<UploaderUserInfo>) => MutableModel<UploaderUserInfo> | void): UploaderUserInfo;
}

type EagerCliQueryData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CliQueryData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uuid?: string | null;
  readonly title?: string | null;
  readonly decscription?: string | null;
  readonly gender?: string | null;
  readonly transgender?: string | null;
  readonly education?: string | null;
  readonly languageId?: string | null;
  readonly languageFluency?: string | null;
  readonly miniCourse?: string | null;
  readonly speechDisorders?: string | null;
  readonly downloadUrl?: string | null;
  readonly status?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCliQueryData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CliQueryData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uuid?: string | null;
  readonly title?: string | null;
  readonly decscription?: string | null;
  readonly gender?: string | null;
  readonly transgender?: string | null;
  readonly education?: string | null;
  readonly languageId?: string | null;
  readonly languageFluency?: string | null;
  readonly miniCourse?: string | null;
  readonly speechDisorders?: string | null;
  readonly downloadUrl?: string | null;
  readonly status?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CliQueryData = LazyLoading extends LazyLoadingDisabled ? EagerCliQueryData : LazyCliQueryData

export declare const CliQueryData: (new (init: ModelInit<CliQueryData>) => CliQueryData) & {
  copyOf(source: CliQueryData, mutator: (draft: MutableModel<CliQueryData>) => MutableModel<CliQueryData> | void): CliQueryData;
}

type EagerAppConfig = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppConfig, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly maxSetsSize?: number | null;
  readonly allowSkip?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppConfig = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppConfig, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly maxSetsSize?: number | null;
  readonly allowSkip?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppConfig = LazyLoading extends LazyLoadingDisabled ? EagerAppConfig : LazyAppConfig

export declare const AppConfig: (new (init: ModelInit<AppConfig>) => AppConfig) & {
  copyOf(source: AppConfig, mutator: (draft: MutableModel<AppConfig>) => MutableModel<AppConfig> | void): AppConfig;
}

type EagerRecordedPhrase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecordedPhrase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phraseId?: string | null;
  readonly phraseSetId?: string | null;
  readonly identityId?: string | null;
  readonly uuid?: string | null;
  readonly postgresId?: string | null;
  readonly filepath?: string | null;
  readonly recordedTime?: string | null;
  readonly languageId?: string | null;
  readonly isValidated?: boolean | null;
  readonly validationStatus?: string | null;
  readonly validationComment?: string | null;
  readonly validationRating?: number | null;
  readonly validatedBy?: string | null;
  readonly validatedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecordedPhrase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecordedPhrase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phraseId?: string | null;
  readonly phraseSetId?: string | null;
  readonly identityId?: string | null;
  readonly uuid?: string | null;
  readonly postgresId?: string | null;
  readonly filepath?: string | null;
  readonly recordedTime?: string | null;
  readonly languageId?: string | null;
  readonly isValidated?: boolean | null;
  readonly validationStatus?: string | null;
  readonly validationComment?: string | null;
  readonly validationRating?: number | null;
  readonly validatedBy?: string | null;
  readonly validatedAt?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecordedPhrase = LazyLoading extends LazyLoadingDisabled ? EagerRecordedPhrase : LazyRecordedPhrase

export declare const RecordedPhrase: (new (init: ModelInit<RecordedPhrase>) => RecordedPhrase) & {
  copyOf(source: RecordedPhrase, mutator: (draft: MutableModel<RecordedPhrase>) => MutableModel<RecordedPhrase> | void): RecordedPhrase;
}

type EagerFeedbackData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeedbackData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uid?: string | null;
  readonly identityId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly message?: string | null;
  readonly date?: string | null;
  readonly isCompleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeedbackData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeedbackData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uid?: string | null;
  readonly identityId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly message?: string | null;
  readonly date?: string | null;
  readonly isCompleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FeedbackData = LazyLoading extends LazyLoadingDisabled ? EagerFeedbackData : LazyFeedbackData

export declare const FeedbackData: (new (init: ModelInit<FeedbackData>) => FeedbackData) & {
  copyOf(source: FeedbackData, mutator: (draft: MutableModel<FeedbackData>) => MutableModel<FeedbackData> | void): FeedbackData;
}

type EagerUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly languageId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phraseSubsetIndex?: string | null;
  readonly project?: string | null;
  readonly dob?: string | null;
  readonly gender?: string | null;
  readonly geographicLocation?: string | null;
  readonly firstLanguage?: string | null;
  readonly fluency?: string | null;
  readonly education?: string | null;
  readonly priorMinCourseTraining?: string | null;
  readonly speechDisorders?: string | null;
  readonly isTransgender?: string | null;
  readonly uid?: string | null;
  readonly isAdmin?: boolean | null;
  readonly isActive?: boolean | null;
  readonly identityId?: string | null;
  readonly enabledDailyReminder?: boolean | null;
  readonly reminderTime?: string | null;
  readonly postgresId?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly languageId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phraseSubsetIndex?: string | null;
  readonly project?: string | null;
  readonly dob?: string | null;
  readonly gender?: string | null;
  readonly geographicLocation?: string | null;
  readonly firstLanguage?: string | null;
  readonly fluency?: string | null;
  readonly education?: string | null;
  readonly priorMinCourseTraining?: string | null;
  readonly speechDisorders?: string | null;
  readonly isTransgender?: string | null;
  readonly uid?: string | null;
  readonly isAdmin?: boolean | null;
  readonly isActive?: boolean | null;
  readonly identityId?: string | null;
  readonly enabledDailyReminder?: boolean | null;
  readonly reminderTime?: string | null;
  readonly postgresId?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}

type EagerKwakwalaPhraseDB = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KwakwalaPhraseDB, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phraseId?: number | null;
  readonly phraseSetId?: number | null;
  readonly description?: string | null;
  readonly original?: string | null;
  readonly translated?: string | null;
  readonly enabled?: boolean | null;
  readonly languageId?: number | null;
  readonly exampleAudioPath?: string | null;
  readonly recording1Start?: number | null;
  readonly recording1Stop?: number | null;
  readonly recording2Start?: number | null;
  readonly recording2Stop?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKwakwalaPhraseDB = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KwakwalaPhraseDB, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phraseId?: number | null;
  readonly phraseSetId?: number | null;
  readonly description?: string | null;
  readonly original?: string | null;
  readonly translated?: string | null;
  readonly enabled?: boolean | null;
  readonly languageId?: number | null;
  readonly exampleAudioPath?: string | null;
  readonly recording1Start?: number | null;
  readonly recording1Stop?: number | null;
  readonly recording2Start?: number | null;
  readonly recording2Stop?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type KwakwalaPhraseDB = LazyLoading extends LazyLoadingDisabled ? EagerKwakwalaPhraseDB : LazyKwakwalaPhraseDB

export declare const KwakwalaPhraseDB: (new (init: ModelInit<KwakwalaPhraseDB>) => KwakwalaPhraseDB) & {
  copyOf(source: KwakwalaPhraseDB, mutator: (draft: MutableModel<KwakwalaPhraseDB>) => MutableModel<KwakwalaPhraseDB> | void): KwakwalaPhraseDB;
}