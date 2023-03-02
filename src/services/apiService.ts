import { useQuery } from '@apollo/client';
import axios, { AxiosRequestConfig } from 'axios';
import { GET_ANTS } from '../graphql/queries';
import { ants, Ants } from '../utils/mockeData';

interface Data {
    ants: Ants,
    loading: boolean
}
async function fetchData(): Promise<Data> {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, 5000);
    })
}
export const apiService = { fetchData };