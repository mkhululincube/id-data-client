import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { ShowHeader } from '../../actions/actions';

const HeaderStatus = (status) => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(ShowHeader(status));}, []);
};

export default HeaderStatus;