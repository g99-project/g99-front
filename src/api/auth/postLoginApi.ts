import { LoginRes } from '../../types/login';
import { CommonRequestConfig } from '../../types/axiosApi';
import apiInstance from '../axiosIndex';

/**
 * 로그인 API (POST)
 */
const PostLoginApi = async (
  param: Record<string, string | any>,
): Promise<LoginRes | undefined> => {
  const formData = new FormData();
  formData.append('username', param.username);
  formData.append('password', param.password);

  const config: CommonRequestConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'post',
    url: '/login',
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

export default PostLoginApi;
