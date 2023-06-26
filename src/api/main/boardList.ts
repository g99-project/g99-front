import { CommonRequestConfig } from '../../types/axiosApi';
import { cardInfo } from '../../types/cards';
import apiInstance from '../axiosIndex';

/**
 * 메인 게시판 목록 조회 (GET)
 * @returns { Array }
 */
const boardListApi = async (): Promise<cardInfo[]> => {
  const config: CommonRequestConfig = {
    method: 'get',
    url: '/main',
    doNotShowSpinner: true,
  };

  try {
    const { data } = await apiInstance.request(config);

    return data.item.boardList;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default boardListApi;
