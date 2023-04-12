import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/common.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
// if (typeof window !== 'undefined') {
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root'),
//   );
// }
root.render(
  // StrictMode는 리액트에서 제공하는 검사 도구
  // 개발 모드일때만 디버그를 하며 해당 태그로 감싸져 있는 부분은 자손까지 검사
  // 안전하지 않은 생명주기를 가진 컴포넌트라든지, 권장되지 않는 부분이 있다든지 배포 후 문제가 될만한 이슈들을 미리 잡는 모드라고 보면 됨
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
