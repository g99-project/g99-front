import api from '../index';

export default async function PostJoinApi(param: Record<string, string | any>) {
  await api
    .post('/user', {
      email: param.email,
      password: param.password,
      username: param.username,
      nickname: param.nickname,
      phone: param.phone,
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}
