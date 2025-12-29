import { transformRecordToOption } from '@/utils/common';

export const enableStatusRecord: Record<Api.Common.EnableStatus, App.I18n.I18nKey> = {
  '1': 'page.system.common.status.enable',
  '2': 'page.system.common.status.disable'
};

export const enableStatusOptions = transformRecordToOption(enableStatusRecord);

export const userGenderRecord: Record<Api.SystemManage.UserGender, App.I18n.I18nKey> = {
  '1': 'page.system.user.gender.male',
  '2': 'page.system.user.gender.female'
};

export const userGenderOptions = transformRecordToOption(userGenderRecord);
