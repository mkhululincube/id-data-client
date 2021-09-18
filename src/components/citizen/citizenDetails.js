import React from 'react';
import { Divider } from 'antd';
import style from './citizen.module.css'
import globalstyle from '../../style.module.css'

const CitizenDetails = (props) => {
    const citizenDetails = props.citizenDetails;
return (
<Divider>{citizenDetails}</Divider>
);
};

export default CitizenDetails;