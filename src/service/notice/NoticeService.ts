import axios from 'axios';

const BASE_URL = "http://localhost:8080";
const NOTICE_API = BASE_URL + "/api/v1/notice";
const NOTICE_REG_API = BASE_URL + "/api/v1/notice/reg";
const NOTICE_EDIT_API = BASE_URL + "/api/v1/notice/edit";

class NoticeService {

    // 게시판 목록 아이템 불러오기
    getNotice() {
        return axios.get(NOTICE_API);
    }

    // 게시판 등록폼에 필요한 아이템 불러오기
    getNoticeReg() {
        return axios.get(NOTICE_REG_API);
    }

    // 게시판 등록 액션
    postNotice() {
        return axios.post(NOTICE_API);
    }

    // 게시판 수정폼에 필요한 아이템 불러오기
    getNoticeEdit() {
        return axios.get(NOTICE_EDIT_API);
    }

    // 게시판 수정 액션
    putNotice() {
        return axios.put(NOTICE_API);
    }

    // 게시판 삭제 액션
    deleteNotice() {
        return axios.delete(NOTICE_API);
    }
    
}

export default new NoticeService();
