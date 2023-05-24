import api from '../index';

export default async function PostJoinApi(param: Record<string, string | any>) {
  const formData = new FormData();
  formData.append('email', param.email);
  formData.append('password', param.password);
  formData.append('username', param.username);
  formData.append('nickname', param.nickname);
  formData.append('phone', param.phone);

  await api
    .post('/user', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}
