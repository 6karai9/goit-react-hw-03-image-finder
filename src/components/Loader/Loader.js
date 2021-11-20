import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loading.module.css';

const Loading = () => {
  return (
    <>
      {' '}
      <div className={s.loadingWrap}>
        <Loader
          className={s.loading}
          type="Puff"
          color="#4169E1"
          height={200}
          width={200}
          timeout={3000} //3 secs
        />
      </div>
    </>
  );
};

export default Loading;
