import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';
import { Button } from 'reactstrap';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header>
      <div className="lArea">
        {
          isLogin ? "로그아웃" : <Button color="success">로그인</Button>
        }
      </div>
      <h1 className="logo">
        <Link to="/">홈으로</Link>
      </h1>
      <div className="rArea">
        <Search className='searchBtn' />
      </div>
    </header>
  )
}

export default Header;