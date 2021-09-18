import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Spin, Alert, Space } from 'antd';
import Web3 from 'web3'
import { CITIZENS_ADDRESS, CITIZENS_ABI } from '../../config/citizens'
import { TESTNET_URL } from '../../config/config';
import CitizenDetails from '../../components/citizen/citizenDetails';
const CitizenDetailsContainer = (props) => {
const citizenId = props.citizenId;
const web3Provider = useSelector(state=>state.Web3Provider);
const [citizenNotes, setCitizenNotes]  = useState([]); 
useEffect(()=>{
    const fetchCitizenNotes = async () => {
    const web3 = new Web3(Web3.givenProvider || TESTNET_URL)
    const citizensList = new web3.eth.Contract(CITIZENS_ABI, CITIZENS_ADDRESS)
    const citizenD = await citizensList.methods.getNoteByCitizenId(citizenId).call()
    web3Provider && setCitizenNotes(citizenD)
}
fetchCitizenNotes()
},[])

return (
<>
<Suspense fallback={
<Space>
<Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
</Space>}>
<CitizenDetails citizenDetails={citizenNotes} />
</Suspense>   
</>
);
};

export default CitizenDetailsContainer;