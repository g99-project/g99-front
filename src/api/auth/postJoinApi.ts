import { CommonRequestConfig } from '../../types/axiosApi';
import apiInstance from '../axiosIndex';

/**
 * 회원가입 API (POST)
 */
const PostJoinApi = async (param: Record<string, string | any>) => {
  const formData = new FormData();
  formData.append('email', param.email);
  formData.append('password', param.password);
  formData.append('username', param.username);
  formData.append('nickname', param.nickname);
  formData.append('phone', param.phone);

  const config: CommonRequestConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'post',
    url: '/user',
    data: formData,
    doNotShowSpinner: false,
  };

  try {
    const { data } = await apiInstance.request(config);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default PostJoinApi;
