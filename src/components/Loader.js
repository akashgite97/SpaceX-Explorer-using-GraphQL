import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div>
      <Loader
        type='Oval'
        color='#3F51B5'
        height={60}
        width={100}
        timeout={3000}
        className='loader'
      />
    </div>
  );
};

export default Loading;
