import React from 'react';
import { motion } from "framer-motion";
import { Col, Row } from 'antd';
import style from './citizen.module.css'
import globalstyle from '../../style.module.css'
import AddCitizen from './addCitizen';
import Instructions from './instructions';

const Citizen = (props) => {

return (
<div className={style.citizensContainer}>
<div className={globalstyle.container}>      
<div className={style.citizensInnerContainer}>      
<Row gutter={[24]}>
<Col md={12} xs={24}>
<Instructions />
</Col>
<Col md={12} xs={24}> 
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
<AddCitizen />
</motion.div>
</Col>
</Row>
</div>
</div>
</div>
);
};

export default Citizen;