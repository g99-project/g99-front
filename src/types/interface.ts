import { Dispatch, SetStateAction } from 'react';

export interface LoginType {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}
export interface PwType {
  pw: string;
  setPw: Dispatch<SetStateAction<string>>;
}
