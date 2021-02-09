import React from 'react';
import { ScreenHelmet, Link } from 'karrotframe';

export const MyComponent: React.FC = () => {
  return (
    <div>
      <ScreenHelmet
        title='당근알바'
        appendLeft={
          <Link to='/posts'>글 목록</Link>
        }
        appendRight={
          <Link to='/posts/write'>글 쓰기</Link>
        }
        customBackButton={
          <div>이전</div>
        }
        customCloseButton={
          <Link to='/'>닫기</Link>
        }
        
      />
    </div>
  )
}