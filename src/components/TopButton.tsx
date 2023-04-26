import React, { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { ArrowUp } from 'react-feather';

function TopButton() {
  const [isShow, setIsShow] = useState(false);

  const onTopMove = () => {
    window.scrollTo(0, 0);
  };

  /**
   * debounce scroll 이벤트 적용
   * useMemo hook으로 isShow state 변화시에만 재랜더링
   */
  const debouncedScroll = useMemo(
    () =>
      debounce(() => {
        if (window.scrollY > 100) {
          setIsShow(true);
          return;
        }
        setIsShow(false);
      }, 200),
    [isShow],
  );

  useEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  return (
    <div className="btnTopMove">
      <ArrowUp className={isShow ? 'on' : ''} onClick={onTopMove} />
    </div>
  );
}

export default TopButton;
