import React from 'react';
import { motion } from "framer-motion";
import style from './requirements.module.css';
import { InfoCircleFilled } from '@ant-design/icons';

const Requirements = () => {
return (
<div>
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 50
  }}
>
<div className={style.requirements}>
<p>This application will only work upon installation of metamask </p>
<strong>Follow the provided steps to install </strong>
</div>
</motion.div>
</div>
    );
};

export default Requirements;