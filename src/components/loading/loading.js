import React from 'react';
import { Space, Spin } from 'antd';
import style from './loadingStyle.module.css'

const Loading = () => {
return (
    <div className={style.loadingContainer}>
    <Space size="middle">
    <Spin />
  </Space>  
  </div>
);
};

export default Loading;