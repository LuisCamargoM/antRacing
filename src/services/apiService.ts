import { Ants } from '../utils/mockeData';

interface Data {
    ants: Ants,
    loading: boolean
}
async function fetchData(): Promise<Data> {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve();
            }, 5000);
        } catch (error) {
            reject()
        }
    })
}
export const apiService = { fetchData };