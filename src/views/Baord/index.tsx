import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input } from 'reactstrap';
import styles from './styles.module.scss';

const index = () => {
  const location = useLocation();
  const navigae = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const path = location.pathname?.split('/');
  const categorys = [
    '공지사항',
    '지구인들의 환경 이야기',
    '지구구 아나바다',
    '무엇이든 제보하세요',
  ];
  const goToHome = () => {
    navigae('/');
  };

  const saveBoard = () => {
    console.log('title:', title, 'content:', content, 'category:', category);
  };

  return (
    <div className={styles.content}>
      <div>
        <Input
          bsSize="lg"
          type="select"
          onChange={(e) => setCategory(e.target.value)}
          className={`${styles.inputArea} ${styles.select}`}
        >
          {categorys.map((c, i) => (
            <option key={`category-${String(i)}`}>{c}</option>
          ))}
        </Input>
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="제목을 작성해주세요"
        />
      </div>
      <div className={`${styles.inputArea} ${styles.textarea}`}>
        <textarea
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          placeholder="내용을 작성해주세요"
        />
      </div>
      <div className={styles.btnArea}>
        {path[path.length - 1] === 'board' ? (
          <button type="button" onClick={saveBoard}>
            등록
          </button>
        ) : (
          <button type="button">수정</button>
        )}
        <button type="button" onClick={goToHome}>
          목록
        </button>
      </div>
    </div>
  );
};

export default index;
