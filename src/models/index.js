// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UploaderFileHistory, UploaderUserInfo, CliQueryData, AppConfig, RecordedPhrase, FeedbackData, UserInfo, KwakwalaPhraseDB } = initSchema(schema);

export {
  UploaderFileHistory,
  UploaderUserInfo,
  CliQueryData,
  AppConfig,
  RecordedPhrase,
  FeedbackData,
  UserInfo,
  KwakwalaPhraseDB
};