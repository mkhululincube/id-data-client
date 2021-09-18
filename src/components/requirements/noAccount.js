import React from 'react';
import { motion } from "framer-motion";
import style from './requirements.module.css';

const NoAccount = () => {
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
<p>No account detected or your account has no tokens, get free token on faucet and proceed </p>
</div>
</motion.div>
</div>
    );
};

export default NoAccount;