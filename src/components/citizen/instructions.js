import React from 'react';
import { motion } from "framer-motion";
import style from './citizen.module.css';
import { InfoCircleFilled } from '@ant-design/icons';

const Instruction = () => {
return (
<div>
<div className={style.instructionHeader}>
                <span>Usage Instuctions</span> <InfoCircleFilled />
</div>
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 50
  }}
>
<div className={style.instruction}>
<p>Use Metamask browser extension. If you have done this already please go to Part 3. If you don’t have MetaMask, you MUST install it, otherwise it may result in a permanent loss of funds!</p>
</div>
</motion.div>

<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 50
  }}
>
<div className={style.instruction}>
<span>Step 1: Add MetaMask extension to chrome</span> <p>Click “Add to Chrome” to Install MetaMask as Google Chrome extension. Visit <a href="https://metamask.io">https://metamask.io</a></p>
</div>
</motion.div>
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 50
  }}
>
            <div className={style.instruction}>
            <span>Step 2: Creating a wallet</span>   
            <p>Click on the Metamask logo. Switch to Ropsten Test Network, read and agree to the MetaMask terms and Conditions. Click “Create new wallet”. This depends on your browser.</p>
            </div>
</motion.div>          
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 50
  }}
>
            <div className={style.instruction}>
            <span>Step 3: Get free coins</span>  <p>Visit <a href="https://faucet.metamask.io/">https://faucet.metamask.io/</a> to get free tokens</p>
            </div>
            </motion.div>
</div>
    );
};

export default Instruction;