import { Route, Routes } from 'react-router-dom';
import Main from '../views/Main';
import Login from '../views/auth/Login';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
