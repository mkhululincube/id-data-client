import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenSize } from '../../actions/actions';
import App from '../../App';

const ScreenSizeContainer = () => {
    const selector = useSelector(state=>state.ScreenSize);
    const dispatch = useDispatch();
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    useLayoutEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
    useEffect(() => {
        dispatch(ScreenSize(width));
    }, []);
    return (
       <App width={selector} />
);
};

export default ScreenSizeContainer;