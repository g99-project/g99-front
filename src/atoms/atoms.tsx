import { RecoilState, atom } from 'recoil';

const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});

export default { loginState };
