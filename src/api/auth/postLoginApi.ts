import { LoginRes } from '../../types/login';
import api from '../index';

export default async function PostLoginApi(
  param: Record<string, string | any>,
): Promise<LoginRes | undefined> {
  const formData = new FormData();
  formData.append('username', param.username);
  formData.append('password', param.password);

  let result;
  await api
    .post('/login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => {
      result = response.data;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
}
