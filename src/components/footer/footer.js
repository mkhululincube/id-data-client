import React from 'react';
import style from './footer.module.css';
import globalstyle from '../../style.module.css';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import "antd/dist/antd.css";
const Footer = () => {
return (
<div>
<div className={style.footer2}>
<div  className={globalstyle.container}>   
<Row>
<Col sm={20} xs={17}>
</Col>
<Col className="pull-right" sm={4} xs={7}>
<div><a title="facebook" href="#"><TwitterOutlined style={{color: "#fff"}} /></a>  &nbsp;  &nbsp; 
<a title="twitter" href="#"><FacebookOutlined style={{color: "#fff"}}  /></a>   &nbsp;  &nbsp;   
<a title="linkedin" href="#"><InstagramOutlined style={{color: "#fff"}}  /> </a>   &nbsp;   &nbsp;
<a title="linkedin" href="#"><YoutubeOutlined style={{color: "#fff"}}  /> </a>   &nbsp;   &nbsp;
</div>               
 </Col>
</Row> 
</div>    
</div>    
 </div>
);

};

export default Footer;