import { Route, Routes } from 'react-router-dom';
import Main from '../views/Main';
import Login from '../views/auth/Login';
import Board from '../views/Baord';
import Join from '../views/auth/Join';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default Router;
