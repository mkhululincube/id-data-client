import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row } from 'antd';
import { HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import globalstyle from '../../style.module.css';
import styles from './header.module.css';
import logo from '../../assets/img/swlogo.svg'

const LogoBar = () => {
return (
 <div className={styles.logoBar}>  
<div  className={globalstyle.container}>
<Row gutter={[24]}>
 <Col xs={8} sm={8} md={12}>
    <Link to="/home"><img className={styles.logoBarLogo} src={logo} /></Link>
</Col>  
<Col xs={8} sm={8} md={6}>
<Link to="/home"><span className={styles.menuButton}>Home <HomeOutlined /></span></Link> 
</Col>
<Col xs={8} sm={8} md={5}>
<Link to="/citizens"><span className={styles.menuButton}> Users <UsergroupAddOutlined /></span></Link> 
</Col>
</Row>
</div>
</div>
);
};

export default LogoBar;
