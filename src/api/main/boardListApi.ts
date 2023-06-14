import { thumbnailCardInfo } from '../../types/cards';
import api from '../index';

const apiUrl = '/main';

const boardListApi = async (): Promise<thumbnailCardInfo> => {
  let result;
  try {
    result = await api.get(apiUrl);
  } catch (error) {
    console.log(error);
  }
  return result?.data.item.boardList;
};

export default boardListApi;
