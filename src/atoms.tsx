import { atom } from 'recoil';

export enum IsLogin {
    "N",
    "Y"
}

export const loginState = atom({
    key: "login",
    default: IsLogin.N
})

// TODO: recoil 에서 atom을 변경하지 않고 값 변경할때는 selector 사용 (get,set함수)