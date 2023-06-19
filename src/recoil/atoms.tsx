import { atom, RecoilEnv } from 'recoil';

// Duplicate atom key 에러 메시지 없애기
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const spinnerState = atom({
  key: 'spinner',
  default: false,
});
