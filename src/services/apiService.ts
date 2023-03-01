import axios, { AxiosRequestConfig } from 'axios';
import { ants, Ants } from '../utils/mockeData';

const BASE_URL = 'https://sg-ants-test.herokuapp.com';

async function fetchData<T>(url: string, options?: AxiosRequestConfig): Promise<any> {
    const config: AxiosRequestConfig = {
        ...options,
        withCredentials: true,
        baseURL: BASE_URL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    };

    // try {
    const response = await axios.get<T>(url, config);
    console.log(response)
    // return ants
    // } catch (error) {
    //     console.log(`ERROR: ${JSON.stringify(error)}`)
    // }
}
export const apiService = { fetchData };