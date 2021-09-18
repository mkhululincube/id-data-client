import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Divider, Pagination } from 'antd';
import style from './citizen.module.css'
import CitizenItem from './citizenItem';
import globalstyle from '../../style.module.css'
import Requirements from '../requirements/requirements';
import Instruction from './instructions';

const CitizenView = (props) => {
const citizensList = props.citizens;
const totalCitizens = props.totalCitizens;
const perPage = props.perPage;
const web3Provider = useSelector(state=>state.Web3Provider);
return (
 web3Provider ?    
<div className={style.citizensPageContainer}>
    <div className={globalstyle.container}>
        <div className={style.citizensListContainer}>
            <Divider>List of citizens</Divider>
                <div className={style.citizensHeader}>
                    <Row>
                        <Col md={1} xs={2}>Id</Col>
                        <Col md={2} xs={5}>Name</Col>
                        <Col md={1} xs={2}>Age</Col>
                        <Col md={14} xs={5}>City</Col>
                        <Col md={3} xs={3}></Col>
                        <Col md={3} xs={5}></Col>
                    </Row>
                </div>
        {
        citizensList.map((citizenItem)=>(<CitizenItem key={citizenItem.returnValues.id} citizenItem={citizenItem} />))
        }
        <Pagination defaultCurrent={1} total={43} pageSize={5} /> 
        </div>
  </div>
</div>
:
<div className={globalstyle.container}>
<Row>
<Col md={12} xs={24} offset = {6}>    
<Requirements />
<Instruction />
</Col>
</Row>
</div>
);
};

export default CitizenView;