import React from 'react';
import globalstyle from '../../style.module.css';
import HeaderStatus from '../../containers/settings/headerStatus';
import Citizen from '../citizen/citizen';

function Home() {

HeaderStatus(true) ;
     
return (
<>
<div className={globalstyle.container}>
</div>
<Citizen />
</>
);
}

export default Home;
