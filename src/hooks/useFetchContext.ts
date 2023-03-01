import React, { useContext } from 'react';

import { FetchContext } from '../context/Fetcher';


export const useFetchContext = () => {
    const fetchContext = useContext(FetchContext);
    return fetchContext;
}