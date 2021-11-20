import React from 'react';
import s from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <div className={s.btnWrap}>
      <button className={s.button} onClick={() => loadMore()} type="button">
        Load more
      </button>
    </div>
  );
};

export default Button;
