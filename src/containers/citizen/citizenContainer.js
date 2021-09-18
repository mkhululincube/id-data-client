import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Alert, Space } from 'antd';
import Web3 from 'web3'
import { Citizens } from '../../actions/actions';
import CitizenView from '../../components/citizen/citizenView';
import { CITIZENS_ADDRESS, CITIZENS_ABI } from '../../config/citizens'
import { TESTNET_URL } from '../../config/config';

const CitizenContainer = (props) => {
const dispatch = useDispatch();
const web3Provider = useSelector(state=>state.Web3Provider);

const [totalCitizens, setTotalCitizens]  = useState(0); 
const [perPage, setPerPage]  = useState(5); 
useEffect(()=>{
const fetchCitizens = async () => {
    const web3 = new Web3(Web3.givenProvider || TESTNET_URL)
    const citizensList = new web3.eth.Contract(CITIZENS_ABI, CITIZENS_ADDRESS)
    citizensList.getPastEvents(
        'AllEvents',
        {
          filter: {myIndexedParam: [0,0]},
          fromBlock: 8901929,
          toBlock: 'latest'
        },
        (err, citizens) => {
            dispatch(Citizens(citizens));
            setTotalCitizens(citizens)
            }
      )
    }
   web3Provider && fetchCitizens()


},[])
const selector = useSelector(state=>state.Citizens);
return (
<>
{/* Suspense is not a data fetching library. It's a mechanism for data fetching libraries to communicate to React that the data a component is reading is not ready yet. React can then wait for it to be ready and update the UI. */}
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
<CitizenView perPage={perPage} totalCitizens={totalCitizens} citizens={selector}  />
</Suspense>  
</>
);
};

export default CitizenContainer;