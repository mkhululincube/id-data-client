import React from 'react';
import { useHistory } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './header.module.css';
import globalstyle from '../../style.module.css';

const Topbar = () => {
     const history = useHistory();
     const logoutHandler =() => {
     localStorage.removeItem("citizenMicroFrontend-token");
     if(localStorage.getItem("citizenMicroFrontend-token") === null){
          history.push('/')
     }
}
  
return (
<>
<div className={styles.nav} >
<div className={globalstyle.container}>
<ul className={styles.navbarRight}>
     <li>   
           Welcome 
     </li>
<li><span className={styles.mousePointer} onClick={logoutHandler}><LogoutOutlined /></span></li>
</ul> 
</div>
</div>
  </>
);
};

export default Topbar;
