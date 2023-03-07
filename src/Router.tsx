import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Notice from './pages/notice/Notice';
import NoticeReg from './pages/notice/NoticeReg';
import Login from './pages/auth/Login';
import Join from './pages/auth/Join';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/notice/reg" element={<NoticeReg />} />
        </Routes>
    )
}

export default Router;