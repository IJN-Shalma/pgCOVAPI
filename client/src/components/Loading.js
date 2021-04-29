import React from 'react';
import {usePromiseTracker} from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import './css/Loading.css';

export const Loading = () => 
{
    const {promiseInProgress} = usePromiseTracker();
    /**
     * @return Ritorna.
     */
    return(
        <>
            {promiseInProgress && 
            <div className="loading">
                <Loader type="RevolvingDot" color="#2E8BC0" height="100" width="100"/>
            </div>}
        </>
    )
}