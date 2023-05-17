import api from '../index';

export default async function PostLoginApi(
  param: Record<string, string | any>,
) {
  const formData = new FormData();
  formData.append('username', param.username);
  formData.append('password', param.password);

  await api
    .post('/login', formData, {
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
